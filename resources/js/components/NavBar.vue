<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { about, home, music } from '@/routes'
import { index as contact } from '@/routes/contact'
import { index as projects } from '@/routes/projects'

const page = usePage()

const navigationItems = computed(() => {
    const routeName = String(page.props.route ?? '')

    return [
        { name: 'Home', href: home.url(), current: routeName === 'home' },
        { name: 'About Me', href: about.url(), current: routeName === 'about' },
        { name: 'Projects', href: projects.url(), current: routeName.startsWith('projects.') },
        { name: 'Music', href: music.url(), current: routeName === 'music' },
        { name: 'Contact Me', href: contact.url(), current: routeName.startsWith('contact.') },
    ]
})
</script>

<template>
    <Disclosure v-slot="{ open }" as="nav" class="bg-neutral shadow">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex flex-1 items-center">
                    <div class="flex-shrink-0">
                        <InertiaLink :href="home.url()" class="logo text-bebas text-2xl">
                            MK
                        </InertiaLink>
                    </div>
                    <div class="mx-auto hidden sm:block">
                        <div class="flex space-x-4">
                            <InertiaLink
                                v-for="item in navigationItems"
                                :key="item.name"
                                :href="item.href"
                                :class="[
                                    'block rounded-md px-3 py-2 text-sm font-medium',
                                    {
                                        'bg-gray-900 text-white': item.current,
                                        'hover:bg-gray-700 hover:text-white': !item.current,
                                    },
                                ]"
                            >
                                {{ item.name }}
                            </InertiaLink>
                        </div>
                    </div>
                </div>

                <div class="-mr-2 flex sm:hidden">
                    <DisclosureButton
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
                    >
                        <span class="absolute -inset-0.5" />
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pt-2 pb-3">
                <InertiaLink
                    v-for="item in navigationItems"
                    :key="item.name"
                    :href="item.href"
                    :class="[
                        'block rounded-md px-3 py-2 text-sm font-medium',
                        {
                            'bg-gray-900 text-white': item.current,
                            'hover:bg-gray-700 hover:text-white': !item.current,
                        },
                    ]"
                >
                    {{ item.name }}
                </InertiaLink>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>
