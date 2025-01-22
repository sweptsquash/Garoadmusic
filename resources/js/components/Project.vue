<script lang="ts" setup>
defineProps<{ project: App.Project }>()
</script>

<template>
    <InertiaLink :href="route('projects.show', project.slug)" class="project" :title="project.name">
        <div
            class="background"
            :style="
                project.cover.original
                    ? `background-image: url('${!useIsWebpSupported() || project.cover.webp === null ? project.cover.original : project.cover.webp}');`
                    : undefined
            "
        ></div>
        <div v-if="project.show_logo" class="logo">
            <img
                v-if="project.logo.original"
                :src="
                    !useIsWebpSupported() || project.logo.webp === null
                        ? project.logo.original
                        : project.logo.webp
                "
            />
        </div>
        <div class="info">
            <p class="mb-2 text-lg font-bold">{{ project.name }}</p>
            <blockquote>{{ project.quote }}</blockquote>
            <span class="mt-1 text-gray-400">{{ project.quote_author }}</span>
        </div>
    </InertiaLink>
</template>
