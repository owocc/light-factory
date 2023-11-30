<script setup>
const toast = useToast();
const { useTableColumns, fetchLampList } = useFetchLampApi();

const columns = useTableColumns();

// 表格-操作按钮
const tableActions = (row) => [
  [
    {
      label: "修改分类",
      icon: "i-heroicons-folder-minus-20-solid",
      click: () => {},
    },
    {
      label: "查看分类信息",
      icon: "i-heroicons-eye-20-solid",
      click: () => {},
    },
  ],
  [
    {
      label: "编辑灯具",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => {},
    },
    {
      label: "删除灯具",
      icon: "i-heroicons-trash-20-solid",
      click: () => {},
    },
  ],
];

// 页面操作按钮
const pageActions = [
  {
    icon: "i-heroicons-arrow-path",
    text: "刷新数据",
    click: () => {
      refresh();
    },
  },
  {
    icon: "i-heroicons-trash",
    text: "删除选中的数据",
    click: () => {
      deleteList.value = selected.value.map((item) => item.id);
      handlerOpenDelete();
    },
  },
];

// 表格-选择
const selected = ref([]);

// 查询参数
const query = reactive({
  name: "",
  page: 1,
  limit: 5,
});
const { name, page, limit } = toRefs(query);

// -------- 页面数据获取 -----------
const {
  pending,
  data: category,
  refresh,
} = await useLazyAsyncData(`category`, () => fetchLampList(query), {
  default: () => ({ list: [], total: 0 }),
  watch: [name, page, limit],
});

// 删除数据
const deleteModalVisible = ref(false);
const deleteList = ref([]);

const handlerOpenDelete = async () => {
  deleteModalVisible.value = true;
};

const delLoading = ref(false);

// 添加数据
const formVisible = ref(false);
const state = reactive({
  id: null,
  name: null,
  parent: undefined,
});
const handlerOpenForm = () => {
  formVisible.value = true;
};
</script>

<template>
  <UiPageContainer>
    <template #header>
      <UiPageHeader title="灯具管理">
        <template #action>
          <UInput placeholder="输入要查询的灯具名" size="lg" v-model="name" />
          <UiButtonActions :items="pageActions" />
        </template>

        <template #option>
          <UButton size="lg" icon="i-heroicons-plus" @click="handlerOpenForm">
            添加灯具
          </UButton>
        </template>
      </UiPageHeader>
    </template>

    <UTable
      v-model="selected"
      :rows="category.list"
      :columns="columns"
      :loading="pending"
    >
      <template #actions-data="{ row }">
        <UDropdown :items="tableActions(row)">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-ellipsis-horizontal-20-solid"
          />
        </UDropdown>
      </template>
    </UTable>

    <template #footer>
      <UiPagination
        v-model:page="page"
        :total="category.total"
        v-model:limit="limit"
        :limitOptions="[5, 10, 20, 30]"
      />
    </template>
  </UiPageContainer>

  <ClientOnly>
    <!-- 删除数据弹框 -->

    <!-- 添加/修改表单 -->
  </ClientOnly>
</template>
