<script setup>
const props = defineProps({
  lampData: {
    type: Object,
  },
});
</script>

<template>
  <div
    class="w-full border dark:border-gray-700 p-4 dark:bg-gray-900/25 flex gap-y-4 flex-col justify-center items-center bg-gray-50 group transition-all"
  >
    <div
      class="border w-32 h-36 flex justify-center bg-white dark:bg-gray-700 dark:border-gray-600 rounded-t-full p-2 group-hover:border-primary transition-all"
    >
      <img v-if="lampData.image" :src="lampData.image" class="w-4/5" />
      <div v-else class="flex items-center justify-center flex-col gap-y-2">
        <Icon name="i-heroicons-photo" class="text-4xl" />
        <span class="text-sm">此灯具无图片</span>
      </div>
    </div>

    <div class="text-center">
      <h1>{{ lampData?.name }}</h1>
      <p>{{ lampData?.desc }}</p>
    </div>
    <div class="flex gap-2">
      <UButton variant="outline">查看详情</UButton>
    </div>
  </div>
</template>
