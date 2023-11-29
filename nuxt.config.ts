// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  modules: [
    // '@sidebase/nuxt-auth',
    'nuxt-swiper',
    'nuxt-icon',
    '@nuxt/ui'
  ],
  css: ['~/assets/base.css'],
  typescript: {
    shim: false
  },
  imports: {
    dirs: [
      'composables/config/*.{js,ts}',
      'composables/api/{admin,client}/*.{ts,js}',
    ]
  },
  runtimeConfig: {
    qiniuAccessKey: process.env.QINIU_ACCESSKEY,
    qiniuSecretKey: process.env.QINIU_SECRETKEY,
    qiniuBucket: process.env.QINIU_BUCKET
  }
})
