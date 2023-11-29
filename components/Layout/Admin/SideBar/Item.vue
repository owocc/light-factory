<script setup lang="ts">
interface AdminMenuListItemProps {
  to: string
  icon: string
  text?: string
}

const props = defineProps<AdminMenuListItemProps>()
</script>
<template>
  <li>
    <NuxtLink :to="props.to"
              activeClass="bg-gray-100 dark:bg-gray-700 dark:text-white"
              class="flex font-normal items-center p-2 text-gray-900 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 group">
      <Icon :name="props.icon" class="text-xl"/>
      <span class="ms-3">{{ props?.text }}</span>
    </NuxtLink>
  </li>
</template>
