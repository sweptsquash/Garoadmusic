<script lang="ts" setup>
defineProps<{ albums: App.PageResource<App.Album> }>()
</script>

<template>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        <AppHead title="Music" />
        <Album v-for="(album, index) in albums.data" :key="index" :album="album" />
    </div>
</template>
