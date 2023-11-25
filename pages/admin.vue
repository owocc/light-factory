<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  colorMode: 'light'
})
useSeoMeta({
  title: '星光灯坊 | 后台管理'
})
const { colorModePreference } = useNaiveColorMode()

// Set dark mode
colorModePreference.set('light')
</script>

<template>
  <NuxtPage />
</template>

<style scoped>

</style>
