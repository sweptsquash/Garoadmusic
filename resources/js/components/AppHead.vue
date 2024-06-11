<script setup>
import socialBanner from '@/../images/GaroadSocial.png'
import { computed } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: undefined,
    },
    index: {
        type: Boolean,
        default: true,
    },
    author: {
        type: String,
        default: 'Michael "Garoad" Kelly',
    },
    authorTwitter: {
        type: String,
        required: false,
        default: null,
    },
    ogType: {
        type: String,
        default: 'website',
    },
    description: {
        type: String,
        default:
            'Michael Kelly is a composer for video games and animation under the moniker Garoad. Best known for composing the soundtracks to VA-11 HALL-A and more.',
    },
    thumbnail: {
        type: String,
        default: socialBanner,
    },
    imageWidth: {
        type: String,
        default: '1200',
    },
    imageHeight: {
        type: String,
        default: '630',
    },
    imageAlt: {
        type: String,
        default: undefined,
    },
})

const url = computed(() => usePage().props.location)

const pageTitle = computed(() =>
    props.title ? `${props.title} - Michael "Garoad" Kelly` : 'Michael "Garoad" Kelly',
)
</script>

<template>
    <InertiaHead :title="pageTitle">
        <link rel="canonical" :content="url" />
        <meta name="description" :content="description" />
        <meta name="author" :content="author" />
        <meta name="robots" :content="index ? 'index, follow' : 'noindex, nofollow'" />
        <meta
            name="keywords"
            content="Michael Kelly, Garoad, Garoadmusic, Composer, Video Game Music, Video Game Composer, Va11 Hall-a, Yuppie Psycho, Bushiden, Anime, PS1, PS2, Cyberpunk"
        />
        <meta property="fb:app_id" content="337929222914274" />
        <meta property="og:url" :content="url" />
        <meta property="og:type" :content="ogType" />
        <meta property="og:title" :content="pageTitle" />
        <meta property="og:description" :content="description" />
        <meta property="og:image" :content="thumbnail" />
        <meta property="og:image:width" :content="imageWidth" />
        <meta property="og:image:height" :content="imageHeight" />
        <meta property="og:image:alt" :content="imageAlt ?? pageTitle" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Michael 'Garoad' Kelly" />
        <meta name="twitter:title" :content="pageTitle" />
        <meta name="twitter:description" :content="description" />
        <meta name="twitter:image" :content="thumbnail" />
        <meta name="twitter:card" content="summary_large_image" />
    </InertiaHead>
</template>
