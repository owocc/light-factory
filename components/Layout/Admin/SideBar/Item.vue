<script setup>
// -------- 组件 props 定义
const props = defineProps({
  to: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'i-heroicons-command-line'
  },
  text: {
    type: String
  }
})
</script>
<template>
  <li>
    <NuxtLink :to="props.to" activeClass="bg-gray-100 dark:bg-gray-700 dark:text-white"
      class="flex font-normal items-center p-2 text-gray-900 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 group">
      <Icon :name="props.icon" class="text-xl" />
      <span class="ms-3">{{ props?.text }}</span>
    </NuxtLink>
  </li>
</template>
