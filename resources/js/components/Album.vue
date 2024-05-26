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
                src="https://garoadmusic.com/assets/img/YuppieCover.1c28cc66df15bf8497c404969a667af4.webp"
            />
        </div>
        <div class="info">
            <p class="mb-0 text-lg font-bold">{{ album.name }}</p>
        </div>
    </a>
</template>
