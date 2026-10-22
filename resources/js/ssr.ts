import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { createSSRApp, DefineComponent, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import Layout from '@/layouts/default.vue'

const appName = import.meta.env.VITE_APP_NAME || 'Michael "Garoad" Kelly'

createServer(
    (page) =>
        createInertiaApp({
            page,
            pages: {
                path: './pages',
                lazy: true,
            },
            render: renderToString,
            title: (title) => (title ? `${title} | ${appName}` : appName),
            layout: () => Layout,
            resolve: (name) => {
                const pages = import.meta.glob<DefineComponent>('./pages/**/*.vue')
                return pages[`./pages/${name}.vue`]()
            },
            setup: ({ App, props, plugin }) =>
                createSSRApp({ render: () => h(App, props) }).use(plugin),
        }),
    {
        cluster: true,
        port: 13715,
    },
)
