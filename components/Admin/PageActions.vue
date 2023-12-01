<script setup>
const props = defineProps({
  leftActions: {
    type: Array,
    required: true,
  },
  rightActions: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <UiPageHeader title="灯具管理">
    <template #action>
      <UInput placeholder="输入要查询的灯具名" size="lg" v-model="name" />
      <UiButtonActions :items="leftActions" />
    </template>

    <template #option>
      <UButton size="lg" icon="i-heroicons-plus" @click="handlerOpenForm">
        添加灯具
      </UButton>
    </template>
  </UiPageHeader>
</template>
