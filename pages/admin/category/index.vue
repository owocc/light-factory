<script setup>
// ------ 组合项获取 --------
const toast = useToast();
const {
  fetchCategoryList,
  fetchDeleteCategory,
  fetchAddCategory,
  fetchCategoryTypeList,
  fetchUpdateCategory,
  useTableColumns,
} = useFetchCategoryApi();

// -------- 页面内容配置 -----------

// 表格字段映射
const tableColumns = useTableColumns();
// 表格-选择列表
const selected = ref([]);

// -------- 表格-操作菜单 ------------
// 表格末尾列中的操作菜单
const tableActions = (row) => [
  [
    {
      label: "查看详情",
      icon: "i-heroicons-eye-20-solid",
      click: () => {
        useRouter().push({
          path: `/admin/category/${row.id}`,
        });
      },
    },
  ],
  [
    {
      label: "编辑分类",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => {
        state.id = row.id;
        state.name = row.name;
        state.parent = categoryType.value.list.filter(
          (e) => e.id === row.parentId
        )[0];
        console.log(categoryType.value.list)
        handlerOpenForm();
      },
    },
    {
      label: "删除分类",
      icon: "i-heroicons-trash-20-solid",
      click: async () => {
        handlerDeleteModalOpen([row]);
      },
    },
  ],
];

// 页面操作按钮
const pageActions = [
  {
    icon: "i-heroicons-arrow-path",
    text: "刷新数据",
    click: () => {
      handlerRefresh();
    },
  },
  {
    icon: "i-heroicons-trash",
    text: "删除选中的数据",
    click: () => {
      handlerDeleteModalOpen(selected.value);
    },
  },
  {
    icon: "i-heroicons-archive-box",
    text: "查看未分类灯具数据",
    click: () => {
      useRouter().push({
        path: `/admin/category/1`,
      });
    },
  },
];

// 查询参数
const query = reactive({
  name: "",
  page: 1,
  limit: 5,
});

const { name, page, limit } = toRefs(query);

// ------------- 查询操作 ------------------
// 对于管理端的数据都是异步获取的,使用 useLazyAsyncData 自动获取数据并监听更新
const { pending, data, refresh } = await useLazyAsyncData(
  `category`,
  () => fetchCategoryList(query),
  {
    default: () => ({ list: [], total: 0 }),
    watch: [name, page, limit],
  }
);

// 获取菜单选项
const { refresh: refreshTypeList, data: categoryType } = await useLazyAsyncData(
  "typeList",
  () => fetchCategoryTypeList(),
  {
    default: () => ({ list: [], total: 0 }),
  }
);

// 刷新数据
const handlerRefresh = () => {
  refresh();
  refreshTypeList();
};

// ----------- 删除操作 --------------------
// 删除数据
const deleteModalVisible = ref(false);
const deleteList = ref([]);

// ------------ 弹窗打开与关闭 ---------------
const handlerDeleteModalOpen = async (categoryList) => {
  if (!categoryList || categoryList.length <= 0) {
    return toast.add({
      title: "没有选择要删除的数据哦",
      timeout: 1000,
      icon: "i-heroicons-x-circle",
    });
  }

  deleteList.value = categoryList.map((item) => item.id);
  deleteModalVisible.value = true;
};

const handlerDeleteModalClose = () => {
  // 清空待删除的数据
  deleteModalVisible.value = false;
  deleteList.value = [];
};

const delLoading = ref(false);
const handlerFetchDelete = async () => {
  delLoading.value = true;
  await fetchDeleteCategory(deleteList.value);
  selected.value = [];
  await refresh();
  delLoading.value = false;
  handlerDeleteModalClose();
  toast.add({
    title: "删除成功",
    timeout: 1000,
    icon: "i-heroicons-check-circle",
    description: "所选分类数据已删除,分类中所有灯具数据已迁移至未分类",
  });
};

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
// 处理添加数据
const handlerAdd = async () => {
  await fetchAddCategory({
    name: state.name,
    parentId: state.parent.id,
  });

  toast.add({
    title: "添加成功",
    timeout: 1000,
    icon: "i-heroicons-check-circle",
  });
};
const handlerFormClose = () => {
  state.name = null;
  state.parent = undefined;
  state.id = undefined;
  formVisible.value = false;
};

const handlerUpdate = async () => {
  await fetchUpdateCategory({
    name: state.name,
    parentId: state.parent.id,
    id: state.id,
  });

  toast.add({
    title: "修改成功",
    timeout: 1000,
    icon: "i-heroicons-check-circle",
  });
};
const handlerFormSubmit = async () => {
  if (state.id) {
    await handlerUpdate();
  } else {
    await handlerAdd();
  }
  handlerFormClose();
  await refresh();
};
</script>

<template>
  <UiPageContainer>
    <template #header>
      <UiPageHeader title="分类管理">
        <template #action>
          <UInput placeholder="输入要查询的分类名" size="lg" v-model="name" />
          <UiButtonActions :items="pageActions" />
        </template>

        <template #option>
          <UButton size="lg" icon="i-heroicons-plus" @click="handlerOpenForm">
            添加分类
          </UButton>
        </template>
      </UiPageHeader>
    </template>

    <UTable
      v-model="selected"
      :rows="data.list"
      :columns="tableColumns"
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
        :total="data.total"
        v-model:limit="limit"
        :limitOptions="[5, 10, 20, 30]"
      />
    </template>
  </UiPageContainer>

  <ClientOnly>
    <!-- 删除数据弹框 -->
    <UiModal
      v-model="deleteModalVisible"
      icon="i-heroicons-exclamation-circle"
      color="red"
      msg="是否要删除这条数据?"
      load-label="正在删除"
      btn-label="确定删除"
      @close="handlerDeleteModalClose"
      :loading="delLoading"
      @submit="handlerFetchDelete"
    />

    <!-- 添加/修改表单 -->
    <AdminPageSlideover
      :loading="false"
      v-model:visible="formVisible"
      @submit="handlerFormSubmit"
      @close="handlerFormClose"
    >
      <UForm class="flex flex-col gap-y-4" :state="state" @submit="handlerAdd">
        <UFormGroup label="分类名称" size="lg">
          <UInput v-model="state.name" color="gray"></UInput>
        </UFormGroup>
        <UFormGroup label="父级分类" size="lg">
          <USelectMenu
            placeholder="请选择父级分类"
            v-model="state.parent"
            :options="categoryType.list"
            optionAttribute="name"
          >
          </USelectMenu>
        </UFormGroup>
      </UForm>
    </AdminPageSlideover>
  </ClientOnly>
</template>
