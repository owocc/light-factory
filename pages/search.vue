<script setup>
const query = reactive({
  name: "",
});

// 获取灯具数据
const { data, pending } = await useLazyAsyncData(
  "categoryLamp",
  () =>
    $fetch("/api/lamp/list", {
      method: "GET",
      query,
    }),
  {
    default: () => ({ list: [], total: 0 }),
    watch: [() => query.name],
  }
);
useSeoMeta({
  title: '星光灯坊 | 搜索'
})
</script>

<template>
  <div class="mx-auto pt-8 max-w-6xl">
    <div
      class="w-full py-4 flex justify-center px-4 flex-col items-center mb-8 gap-4"
    >
      <h1 class="text-2xl font-bold">搜索灯具</h1>

      <div
        class="w-full border p-4 rounded-md bg-white flex-col gap-y-4 dark:bg-base-dark dark:border-orange-900"
      >
        <input
          v-model="query.name"
          class="bg-transparent w-full flex-1 inline-block outline-none"
          placeholder="输入想要搜索的灯具名称吧"
        />
      </div>
    </div>

    <UiEmpty
      icon="i-heroicons-archive-box"
      :loading="pending"
      :visible="data.list.length > 0"
      msg="此分类下无灯具哦"
    >
      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-8 2xl:grid-cols-5"
      >
        <CommonCardProduct
          v-for="item in data.list"
          v-bind="item"
          :key="item.id"
        />
      </div>
    </UiEmpty>
    <p class="text-center mt-8">
      共
      <span class="text-primary"> {{ data.total }} </span>
      个灯具
    </p>
  </div>
</template>

<style scoped></style>
