import inertia from '@inertiajs/vite'
import { wayfinder } from '@laravel/vite-plugin-wayfinder'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import autoimport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import manifestSRI from 'vite-plugin-manifest-sri'

export default defineConfig({
    resolve: {
        alias: {
            '@': '/resources/js',
            '~': '/node_modules',
        },
    },
    build: {
        sourcemap: true,
    },
    plugins: [
        autoimport({
            eslintrc: {
                enabled: true,
            },
            vueTemplate: true,
            dts: 'resources/js/types/auto-imports.d.ts',
            dirs: ['resources/js/Composables'],
            imports: [
                'vue',
                '@vueuse/core',
                { '@inertiajs/vue3': ['router', 'useForm', 'usePage', 'useRemember'] },
            ],
        }),
        Components({
            dirs: ['resources/js/components/**'],
            dts: 'resources/js/types/auto-components.d.ts',
            deep: true,
            directoryAsNamespace: true,
            resolvers: [
                (name) => {
                    const components = {
                        InertiaLink: { component: 'Link', lib: '@inertiajs/vue3' },
                        InertiaHead: { component: 'Head', lib: '@inertiajs/vue3' },
                    }

                    if (name in components) {
                        return {
                            name: components[name]?.component,
                            from: components[name]?.lib,
                        }
                    }
                },
            ],
        }),
        laravel({
            input: ['resources/js/app.ts', 'resources/js/pages/error.vue', 'resources/css/app.css'],
            refresh: ['resources/css/**', 'resources/js/**', 'routes/**'],
            valetTls: process.env.VITE_VALET_TLS ? 'garoadmusic.test' : undefined,
        }),
        inertia({
            ssr: {
                entry: 'resources/js/ssr.ts',
                port: 13715,
                cluster: true,
            },
        }),
        wayfinder(),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        manifestSRI(),
    ],
    ssr: {
        noExternal: ['@inertiajs/vue3/server', 'lodash'],
    },
})
