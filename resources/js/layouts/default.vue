<script lang="ts" setup>
onMounted(() => {
    const timezone = useDayJs.tz.guess() ?? 'Europe/London'
    useDayJs.tz.setDefault(timezone)
})
</script>

<template>
    <NavBar />
    <main class="h-body p-6">
        <slot />
    </main>
    <AppFooter />
</template>
