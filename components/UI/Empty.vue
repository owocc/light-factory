<script setup>
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  msg: {
    type: String,
    default: "无数据",
  },
  icon: {
    type: String,
    default: "i-heroicons-circle-stack",
  },
});
</script>
<template>
  <div
    v-if="props.loading"
    class="flex justify-center items-center py-8 flex-col gap-y-4"
  >
    <Icon name="i-heroicons-arrow-path" class="animate-spin text-4xl" />
    <p class="text-sm">加载中</p>
  </div>
  <div v-else-if="!props.visible">
    <slot name="content">
      <div class="flex justify-center items-center flex-col py-8 gap-y-4">
        <Icon :name="props.icon" class="text-4xl" />
        <p class="text-sm">{{ props.msg }}</p>
      </div>
    </slot>
  </div>
  <template v-else>
    <slot />
  </template>
</template>
