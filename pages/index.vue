<script lang="ts" setup>
useSeoMeta({
  title: '星光灯坊 | 首页',
  description: '一个灯具',
  ogImage: '/preview.png',
})

useHead({
  htmlAttrs: {
    lang: 'zh'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>

<template>
  <main>
    <ClientSectionHome/>
    <ClientSectionPopular/>
    <ClientSectionChoose/>
    <ClientSectionFeatures/>
    <ClientSectionProducts/>
    <ClientSectionJoin/>
  </main>
</template>
