<script setup>
defineEmits(["switchMenu"]);
</script>
<template>
  <header
    class="w-full sticky top-0 shadow-line dark:shadow-gray-700 shadow-gray-200 left-0 bg-white z-50 dark:bg-gray-800"
  >
    <nav class="flex items-center justify-between nav px-4">
      <div>
        <CommonLogo
          dark
          class="py-2 hover:px-4 hover:bg-slate-100 rounded-lg dark:hover:bg-slate-700 !duration-200"
        />
      </div>
      <div>
        <UButton
          icon="i-heroicons-bars-3"
          color="gray"
          class="lg:hidden"
          @click="$emit('switchMenu')"
        />
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts"></script>
