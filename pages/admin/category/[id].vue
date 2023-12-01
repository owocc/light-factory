<script setup>
// 查询参数
const query = reactive({
  limit: 10,
  page: 1,
  name: "",
});
const { fetchCategoryDetail } = useFetchCategoryApi();

// const router = useRoute();
const id = useRoute().params.id;
const { data, pending, refresh } = await useLazyAsyncData(
  "categoryDetail",
  () => fetchCategoryDetail(id, { query }),
  {
    default: () => ({ list: [], category: {}, total: 0 }),
    watch: [query],
    deep: true,
  }
);
const pageActions = [
  {
    icon: "i-heroicons-arrow-path",
    text: "刷新数据",
    click: () => {
      refresh();
    },
  },
];
</script>
<template>
  <UiPageContainer>
    <template #header>
      <UiPageHeader :title="data.category?.name || '分类'" back>
        <template #action>
          <UInput
            v-model="query.name"
            placeholder="输入需要查询的灯具名"
            size="lg"
          />
          <UiButtonActions :items="pageActions" />
        </template>
        <template #option> </template>
      </UiPageHeader>
    </template>

    <UiEmpty
      :visible="data.list.length > 0"
      :loading="pending"
      msg="此分类未查询到灯具"
    >
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <CommonCardLampCategory
          v-for="item in data.list"
          :lampData="item"
          :key="item.id"
        />
      </div>
    </UiEmpty>

    <template #footer>
      <UiPagination
        v-model:page="query.page"
        :total="data.total"
        v-model:limit="query.limit"
        :limitOptions="[5, 10, 20, 30]"
      />
    </template>
  </UiPageContainer>
</template>
