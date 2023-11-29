<script setup lang="ts">
interface CardFeaturesProps {
  title: string
  desc: string
}

const props = defineProps<CardFeaturesProps>()
</script>
<template>
  <div
      class="bg-gradient-to-b rounded-md from-gray-100 to-white py-8 px-6 text-center outline outline-transparent hover:shadow-lg group dark:from-container-dark dark:hover:outline-primary transition-all"
  >
    <h3
        class="text-lg font-medium group-hover:bg-third-gradient group-hover:text-transparent group-hover:bg-clip-text mb-4"
    >
      {{props.title}}
    </h3>
    <p class="group-hover:text-base-title transition-all dark:text-neutral-500 dark:group-hover:text-white">
      {{props.desc}}
    </p>
  </div>
</template>

