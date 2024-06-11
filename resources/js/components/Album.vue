<script setup>
defineProps({
    album: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <a :href="album.url" class="album" target="_blank" rel="noopener noreferrer">
        <div class="cover">
            <img
                :src="
                    !useIsWebpSupported() || album.cover.webp === null
                        ? album.cover.original
                        : album.cover.webp
                "
            />
        </div>
        <div class="info">
            <p class="mb-0 text-lg font-bold">{{ album.name }}</p>
        </div>
    </a>
</template>
