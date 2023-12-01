<script setup lang="ts">
interface PageHeaderProps {
  title?: string;
  back?: boolean;
}

const props = defineProps<PageHeaderProps>();
</script>
<template>
  <header class="px-4 w-full flex flex-col py-6">
    <slot name="title">
      <div class="flex items-center mb-4 gap-x-4">
        <UiButtonBack v-if="props.back" />
        <h1 class="text-3xl" v-if="props?.title">
          {{ props?.title }}
        </h1>
      </div>
    </slot>

    <div class="flex justify-between flex-col lg:flex-row gap-y-4">
      <div class="flex item-center gap-x-2">
        <slot name="action" />
      </div>
      <div>
        <slot name="option" />
      </div>
    </div>
  </header>
</template>
