<script setup>
const form = useForm({
    name: '',
    email: '',
    subject: '',
    message: '',
})

const isProcessing = ref(false)

const displaySuccess = ref(false)

const submitForm = () => {
    isProcessing.value = true

    form.post('/contact', {
        onSuccess: () => {
            form.reset()
            isProcessing.value = false
            displaySuccess.value = true
        },
        onFinish: () => {
            isProcessing.value = false
        },
    })
}
</script>

<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AppHead title="Contact Me" />

        <div class="rounded-md bg-neutral shadow-md">
            <div class="border-b border-base-100 px-4 py-5 sm:px-6">
                <div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div class="ml-4 mt-4">
                        <h3 class="text-base font-semibold leading-6 text-neutral-content">
                            Contact Me
                        </h3>
                        <p class="mt-1 text-sm text-neutral-content">
                            Feel free to reach out to me using the form below.
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex w-full flex-col gap-y-4 px-4 py-5 sm:px-6 md:mx-auto md:w-1/2">
                <div v-if="displaySuccess" class="rounded-md bg-green-50 p-4">
                    <div class="flex">
                        <div class="ml-3 flex-1 md:flex md:justify-between">
                            <p class="text-sm text-green-800">
                                Thanks for reaching out! I will get back to you as soon as possible.
                            </p>
                        </div>
                    </div>
                </div>
                <template v-else>
                    <InputField
                        id="name"
                        v-model="form.name"
                        name="name"
                        label="Name"
                        placeholder="John Doe"
                        :error="form.errors.name"
                        required
                    />
                    <InputField
                        id="email"
                        v-model="form.email"
                        name="email"
                        label="Email"
                        type="email"
                        placeholder="john.doe@example.com"
                        :error="form.errors.email"
                        required
                    />
                    <InputField
                        id="subject"
                        v-model="form.subject"
                        name="subject"
                        label="Subject"
                        placeholder="Project Enquiry"
                        :error="form.errors.subject"
                        required
                    />
                    <TextareaField
                        id="message"
                        v-model="form.message"
                        name="message"
                        label="Message"
                        placeholder="Your message here..."
                        :error="form.errors.message"
                        required
                    />
                    <button
                        :disabled="isProcessing"
                        type="button"
                        class="inline-flex items-center justify-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-70"
                        @click.prevent="submitForm"
                    >
                        <Loading v-if="isProcessing" class="h-5 w-5 animate-spin" />
                        Submit
                    </button>
                </template>
            </div>
        </div>
    </div>
</template>
