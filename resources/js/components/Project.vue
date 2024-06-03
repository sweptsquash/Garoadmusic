<script setup>
const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <InertiaLink :href="`/projects/${project.slug}`" class="project" :title="project.name">
        <div
            class="background"
            :style="`background-image: url('${!useIsWebpSupported() ? project.cover.original : project.cover.webp}');`"
        ></div>
        <div v-if="project.showLogo" class="logo">
            <img :src="!useIsWebpSupported() ? project.logo.original : project.logo.webp" />
        </div>
        <div class="info">
            <p class="mb-2 text-lg font-bold">{{ project.name }}</p>
            <blockquote>{{ project.quote }}</blockquote>
            <figcaption class="mt-1 text-gray-400">{{ project.quote_author }}</figcaption>
        </div>
    </InertiaLink>
</template>
