<script lang="ts" setup>
import type { Project } from '@/types'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { isEmpty } from 'lodash'

const props = defineProps<{ project: Project }>()

const isModalOpen = ref(false)

const hasEmbed = computed(() => {
    return (
        (props.project.bandcamp_embed_url && !isEmpty(props.project.bandcamp_embed_url)) ||
        (props.project.youtube_embed_url && !isEmpty(props.project.youtube_embed_url))
    )
})

const embedUrl = computed(() => {
    return props.project.bandcamp_embed_url || props.project.youtube_embed_url || ''
})
</script>

<template>
    <div>
        <AppHead :title="project.name" />

        <div
            class="bg-neutral relative isolate -mx-6 -mt-6 min-h-[40vh] overflow-hidden px-6 py-24 sm:py-32 lg:px-8"
        >
            <img
                v-if="project.banner.original"
                :src="
                    !useIsWebpSupported() || project.banner.webp === null
                        ? project.banner.original
                        : project.banner.webp
                "
                alt=""
                class="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div class="mx-auto max-w-2xl space-y-10 text-center">
                <a
                    v-if="project.youtube_embed_url"
                    href="#"
                    class="text-white opacity-75 hover:opacity-100 focus:opacity-100"
                    @click.prevent="isModalOpen = true"
                >
                    <Play class="inline-block h-24 w-24" />
                </a>
                <img
                    v-if="project.logo.original"
                    :src="
                        !useIsWebpSupported() || project.logo.webp === null
                            ? project.logo.original
                            : project.logo.webp
                    "
                    alt=""
                    class="mx-auto h-32 w-auto"
                />
            </div>
        </div>

        <div class="mt-4 flex flex-col gap-4 lg:flex-row">
            <div class="bg-neutral relative w-full flex-grow space-y-4 rounded-md p-4 shadow-md">
                <h1 class="text-3xl">{{ project.name }}</h1>
                <p>
                    <strong>Developer:</strong>
                    {{ project.developer ? project.developer : 'N/A' }}
                </p>
                <p>
                    <strong>Publisher:</strong>
                    {{ project.publisher ? project.publisher : 'N/A' }}
                </p>
                <p>
                    <strong>Release Date:</strong>
                    {{
                        project.release_date
                            ? useDayJs(project.release_date).format('DD MMM, YYYY')
                            : 'TBA'
                    }}
                </p>
                <template v-if="project.links && project.links.length">
                    <div class="flex w-full max-w-full flex-row flex-wrap gap-4">
                        <a
                            v-for="(link, index) in project.links"
                            :key="`link-${index}`"
                            :href="link.url"
                            class="hover:bg-base-100 focus:bg-base-100 flex rounded-md border p-4 shadow-md"
                            :title="link.name"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {{ link.name }}
                        </a>
                    </div>
                </template>
                <div
                    class="prose prose-invert max-w-full border-t pt-4"
                    v-html="project.description"
                ></div>
            </div>
            <div
                v-if="project.albums && project.albums.length"
                class="relative block w-full flex-0"
            >
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <Album v-for="(album, index) in project.albums" :key="index" :album="album" />
                </div>
            </div>
            <div v-if="hasEmbed">
                <iframe
                    class="mx-auto h-[786px] w-full border-none sm:w-[350px]"
                    :src="embedUrl"
                    seamless
                ></iframe>
            </div>
        </div>

        <TransitionRoot v-if="project.youtube_embed_url" as="template" :show="isModalOpen">
            <Dialog class="relative z-10" @close="isModalOpen = false">
                <TransitionChild
                    as="template"
                    enter="ease-out duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in duration-200"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div class="bg-opacity-75 fixed inset-0 bg-gray-500 transition-opacity" />
                </TransitionChild>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                        <TransitionChild
                            as="template"
                            enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enter-to="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 sm:scale-100"
                            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <DialogPanel
                                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[50vw] md:max-w-[80vw]"
                            >
                                <iframe
                                    :src="project.youtube_embed_url"
                                    class="aspect-video w-full"
                                />
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>
