<script lang="ts" setup>
const props = defineProps<{ status: number }>()

const errorHeaderTitle = computed(() => {
    const statuses: { [key: number]: string } = {
        503: '503: Service Unavailable',
        500: '500: Server Error',
        404: '404: Page Not Found',
        403: '403: Forbidden',
    }

    return statuses[props.status]
})

const errorTitle = computed(() => {
    const statuses: { [key: number]: string } = {
        503: 'Service Unavailable',
        500: 'Server Error',
        404: 'Page Not Found',
        403: 'Forbidden',
    }

    return statuses[props.status]
})

const errorDescription = computed(() => {
    const statuses: { [key: number]: string } = {
        503: 'Sorry, we are doing some maintenance. Please check back soon.',
        500: 'Whoops, something went wrong on our servers.',
        404: 'Sorry, the page you are looking for could not be found.',
        403: 'Sorry, you are forbidden from accessing this page.',
    }

    return statuses[props.status]
})
</script>

<template>
    <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <AppHead :title="errorTitle" />
        <div class="text-center">
            <p class="text-base font-semibold text-indigo-600 dark:text-white">{{ status }}</p>
            <h1
                class="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
            >
                {{ errorHeaderTitle }}
            </h1>
            <p class="mt-6 text-base leading-7 text-gray-600 dark:text-base-content">
                {{ errorDescription }}
            </p>
            <div v-if="status !== 503" class="mt-10 flex items-center justify-center gap-x-6">
                <InertiaLink :href="route('home')" class="btn-primary">Go back home</InertiaLink>
            </div>
        </div>
    </main>
</template>
