<script setup>
const { tailwindBorderStyle } = useTailwindcssConfig();
const { $clsx } = useNuxtApp();
const btnClasses = computed(() => $clsx(tailwindBorderStyle, "border"));
</script>
<template>
  <UTooltip text="返回">
    <UButton
      @click="$router.back()"
      v-bind="$attrs"
      color="gray"
      icon="i-heroicons-arrow-uturn-left-20-solid"
      :class="btnClasses"
      variant="ghost"
    />
  </UTooltip>
</template>
