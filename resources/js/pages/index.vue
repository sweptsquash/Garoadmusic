<script setup>
defineProps({
    projects: {
        type: Array,
        required: true,
    },
})
</script>

<template>
    <div class="projects grid grid-cols-1 gap-4 lg:grid-cols-3">
        <AppHead />
        <Project v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
</template>
