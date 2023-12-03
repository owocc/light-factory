<script setup>
useSeoMeta({
  title: '星光灯坊 | 全部'
})
const { data } = await useFetch("/api/lamp/all", {
  method: "get",
});
</script>
<template>
  <div class="mx-auto pt-8 max-w-6xl">
    <!-- 搜索 -->
    <div
      class="w-full py-4 flex justify-center flex-col items-center mb-8 gap-4"
    >
      <h1 class="text-2xl font-bold">所有灯具</h1>
    </div>
    <div
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-8 2xl:grid-cols-5"
    >
      <CommonCardProduct
        v-for="item in data.list"
        :key="item.id"
        v-bind="item"
      />
    </div>
    <p class="text-center mt-8">
      共
      <span class="text-primary"> {{ data.total }} </span>
      个灯具
    </p>
  </div>
</template>
