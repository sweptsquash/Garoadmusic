<script setup>
import { ExclamationCircleIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: false,
        default: 'text',
    },
    placeholder: {
        type: String,
        required: false,
        default: undefined,
    },
    error: {
        type: String,
        required: false,
        default: undefined,
    },
    label: {
        type: String,
        required: false,
        default: undefined,
    },
})

const model = defineModel({ type: String, default: '' })

const hasError = computed(() => !!props.error)
</script>

<template>
    <div>
        <label v-if="label" :for="id" class="block text-sm font-medium leading-6">
            {{ label }}
        </label>
        <div class="relative mt-2 rounded-md shadow-sm">
            <input
                :id
                v-model="model"
                :type
                :name
                :class="[
                    'block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
                    {
                        'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500':
                            hasError,
                        'ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600': !hasError,
                    },
                ]"
                :placeholder
                :aria-invalid="hasError ? 'true' : 'false'"
                :aria-describedby="`${id}-error`"
            />
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
