<script lang="ts" setup>
import { ExclamationCircleIcon } from '@heroicons/vue/20/solid'
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        id: string
        name: string
        rows?: number
        placeholder?: string
        error?: string
        label?: string
    }>(),
    {
        rows: 6,
        placeholder: undefined,
        error: undefined,
        label: undefined,
    },
)

const model = defineModel<string>()

const hasError = computed(() => !!props.error)
</script>

<template>
    <div>
        <label v-if="label" :for="id" class="block text-sm font-medium leading-6">
            {{ label }}
        </label>
        <div class="relative mt-2 rounded-md shadow-sm">
            <textarea
                :id
                v-model="model"
                :name
                :rows
                :class="[
                    'block w-full rounded-md border-0 bg-base-100 py-1.5 pr-10 text-white ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
                    {
                        'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500':
                            hasError,
                        'ring-gray-500 placeholder:text-gray-400 focus:ring-indigo-600': !hasError,
                    },
                ]"
                :placeholder
                :aria-invalid="hasError ? 'true' : 'false'"
                :aria-describedby="`${id}-error`"
            ></textarea>
            <div
                v-if="hasError"
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
            >
                <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
            </div>
        </div>
        <p v-if="hasError" :id="`${id}-error`" class="mt-2 text-sm text-red-600">{{ error }}</p>
    </div>
</template>
