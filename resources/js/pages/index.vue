<script lang="ts" setup>
defineProps<{ projects: App.Project[] }>()
</script>

<template>
    <div class="projects grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AppHead />
        <Project v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
</template>
