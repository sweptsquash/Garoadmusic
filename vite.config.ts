import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import inertiaLayout from 'momentum-layout'
import autoimport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import manifestSRI from 'vite-plugin-manifest-sri'
import { watch } from 'vite-plugin-watch'

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
                { 'momentum-trail': ['route', 'current'] },
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
            ssr: 'resources/js/ssr.ts',
            refresh: ['resources/css/**', 'resources/js/**', 'routes/**'],
            valetTls: process.env.VITE_VALET_TLS ? 'garoadmusic.test' : undefined,
        }),
        inertiaLayout(),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        watch({
            pattern: 'routes/**/*.php',
            command: 'php artisan trail:generate',
        }),
        manifestSRI(),
    ],
    ssr: {
        noExternal: ['@inertiajs/vue3/server', 'lodash'],
    },
})
