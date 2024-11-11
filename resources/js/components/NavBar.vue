<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { onBeforeMount, ref } from 'vue'

const route = useRoute()

const navigationItems = ref([
    { name: 'Home', href: '/', route: 'home', current: false },
    { name: 'About Me', href: '/about', route: 'about', current: false },
    { name: 'Projects', href: '/projects', route: 'projects.*', current: false },
    { name: 'Music', href: '/music', route: 'music', current: false },
    { name: 'Contact Me', href: '/contact', route: 'contact.*', current: false },
])

onBeforeMount(() => {
    router.on('navigate', () => {
        const currentActive = navigationItems.value.findIndex((item) => item.current === true)
        const newActive = navigationItems.value.findIndex((item) => {
            if (item.route === null) {
                return false
            }

            return route().current(item.route)
        })

        if (newActive === -1 && currentActive !== -1) {
            navigationItems.value[currentActive].current = false
        }

        if (newActive > -1 && currentActive !== newActive) {
            if (currentActive !== -1) {
                navigationItems.value[currentActive].current = false
            }

            navigationItems.value[newActive].current = true
        }
    })
})
</script>

<template>
    <Disclosure v-slot="{ open }" as="nav" class="bg-neutral shadow">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex flex-1 items-center">
                    <div class="flex-shrink-0">
                        <InertiaLink href="/" class="logo text-bebas text-2xl">MK</InertiaLink>
                    </div>
                    <div class="mx-auto hidden sm:block">
                        <div class="flex space-x-4">
                            <InertiaLink
                                v-for="(item, index) in navigationItems"
                                :key="index"
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
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
            <div class="space-y-1 px-2 pb-3 pt-2">
                <InertiaLink
                    v-for="(item, index) in navigationItems"
                    :key="index"
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
