// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true
    },
    modules: [
        // '@sidebase/nuxt-auth',
        'nuxt-swiper',
        '@nuxtjs/tailwindcss',
        '@bg-dev/nuxt-naiveui',
        'nuxt-icon'
    ],
    css: ['~/assets/base.css'],
    typescript: {
        shim: false
    }
})
