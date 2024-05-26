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
            style="
                background-image: url('https://garoadmusic.com/assets/img/BushidenBG.98383c1f9d6010b33d8b73671d968989.webp');
            "
        ></div>
        <div class="logo">
            <img
                src="https://garoadmusic.com/assets/img/YuppieLogo.8116239aafa02f3e1b2f3990031376eb.webp"
            />
        </div>
        <div class="info">
            <p class="mb-2 text-lg font-bold">{{ project.name }}</p>
            <blockquote>{{ project.quote }}</blockquote>
            <figcaption class="mt-1 text-gray-400">{{ project.quote_author }}</figcaption>
        </div>
    </InertiaLink>
</template>
