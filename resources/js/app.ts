import '../css/app.css'
import type { DefineComponent } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { createApp, createSSRApp, h } from 'vue'
import Layout from '@/layouts/default.vue'

const appName = import.meta.env.VITE_APP_NAME || 'Michael "Garoad" Kelly'

await createInertiaApp({
    progress: {
        color: '#4B5563',
    },
    pages: {
        path: './pages',
        lazy: true,
    },
    title: (title) => (title ? `${title} | ${appName}` : appName),
    layout: () => Layout,
    resolve: (name) => {
        const pages = import.meta.glob<DefineComponent>('./pages/**/*.vue')
        return pages[`./pages/${name}.vue`]()
    },
    setup({ el, App, props, plugin }) {
        const createVueApp = el.hasAttribute('data-server-rendered') ? createSSRApp : createApp

        createVueApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
})
