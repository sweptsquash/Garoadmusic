<script lang="ts" setup>
import MichaelPng from '@/../images/Michael.png'
import MichaelWebp from '@/../images/Michael.webp'

onMounted(() => {})
</script>

<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AppHead title="About Me" />
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div
                class="bg-neutral relative min-h-[30vh] overflow-hidden rounded-md bg-cover bg-center bg-no-repeat px-6 pt-64 pb-9 shadow-md sm:px-12 lg:min-h-[60vh] lg:px-8 lg:pb-8 xl:px-10 xl:pb-10"
                :style="`background-image: url(${useIsWebpSupported() ? MichaelWebp : MichaelPng});`"
            >
                <p class="text-bebas block text-center text-2xl font-bold text-white md:hidden">
                    Michael Kelly
                </p>
            </div>
            <div class="prose prose-invert bg-neutral rounded-md p-4 shadow-md">
                <p>
                    Michael Kelly is a composer for video games and animation under the moniker
                    "Garoad". He is best known for composing the soundtracks to the acclaimed VA-11
                    HALL-A and other games such as Yuppie Psycho and the upcoming Bushiden.
                </p>
                <p>
                    For each project, Michael takes great care to create a unique, memorable
                    identity through its music and fully immerse players in its world. Having been
                    captivated by video games, Japanese anime, and their soundtracks since a young
                    age, Michael has a thorough understanding of what resonates with players and
                    viewers.
                </p>
            </div>
        </div>
    </div>
</template>
