<script setup>
const props = defineProps({
    projects: {
        type: Object,
        required: true,
    },
})

const pageTitle = computed(() => {
    if (props.projects?.meta?.current_page > 1) {
        return `Projects - Page ${props.projects?.meta?.current_page}`
    }

    return 'Projects'
})
</script>

<template>
    <div class="projects grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AppHead title="Projects" />
        <Project v-for="(project, index) in projects?.data" :key="index" :project="project" />
    </div>
</template>
