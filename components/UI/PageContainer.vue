<script setup>
// ---------- UI 样式配置 ------------------
const { tailwindBorderStyle, tailwindMinHeight, tailwindBGStyle } =
  useTailwindcssConfig();
const { $clsx } = useNuxtApp();

const containerClasses = computed(() =>
  $clsx(tailwindBGStyle, tailwindMinHeight)
);

const containerHeaderClasses = computed(() =>
  $clsx(tailwindBorderStyle, "border-b")
);
</script>
<template>
  <div :class="containerClasses">
    <header :class="containerHeaderClasses">
      <slot name="header" />
    </header>
    <slot />

    <footer
      class="border-t py-6 px-4 flex justify-end items-center border-gray-200 dark:border-gray-700 w-full"
    >
      <slot name="footer" />
    </footer>
  </div>
</template>
