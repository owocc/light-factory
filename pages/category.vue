<script setup lang="ts"></script>

<template>
  <div class="mx-auto pt-8 max-w-6xl">
    <div
      class="w-full py-4 flex justify-center px-4 flex-col items-center mb-8 gap-4"
    >
      <h1 class="text-2xl font-bold">灯具分类</h1>

      <div class="w-full border p-4 rounded-md bg-white flex-col gap-y-4">
        <div class="flex items-center gap-4">
          <h1 class="flex-shrink-0">风格:</h1>
          <div class="flex flex-wrap gap-2">
            <UBadge color="white" v-for="item in 10">简约</UBadge>
          </div>
        </div>
      </div>
    </div>

    <div
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-8 2xl:grid-cols-5"
    >
      <CommonCardProduct v-for="item in 20" />
    </div>
  </div>
</template>

<style scoped></style>
