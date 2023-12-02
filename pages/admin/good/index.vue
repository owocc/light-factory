<script setup>
const toast = useToast();
const {
  useTableColumns,
  fetchLampList,
  fetchLampDelete,
  fetchCreateLamp,
  fetchLampDetail,
} = useFetchLampApi();

const columns = useTableColumns();

// 表格-操作按钮
const tableActions = (row) => [
  [
    {
      label: "灯具详细",
      icon: "i-heroicons-eye-20-solid",
      click: () => {},
    },
    {
      label: "灯具订单",
      icon: "i-heroicons-chart-bar-square",
      click: () => {},
    },
  ],
  [
    {
      label: "更改所属分类",
      icon: "i-heroicons-folder-minus-20-solid",
      click: () => {},
    },

    {
      label: "分类详细",
      icon: "i-heroicons-folder-open-20-solid",
      click: () => {
        useRouter().push({
          path: `/admin/category/${row.categoryId}`,
        });
      },
    },
  ],
  [
    {
      label: "编辑灯具",
      icon: "i-heroicons-pencil-square-20-solid",
      click: async () => {
        const data = await fetchLampDetail(row.id);
        handlerFormOpen(data);
      },
    },
    {
      label: "删除灯具",
      icon: "i-heroicons-trash-20-solid",
      click: () => {
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
      refresh();
    },
  },
  {
    icon: "i-heroicons-trash",
    text: "删除选中的数据",
    click: () => {
      handlerDeleteModalOpen(selected.value);
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
} = await useLazyAsyncData(`lamp`, () => fetchLampList(query), {
  default: () => ({ list: [], total: 0 }),
  watch: [query],
  deep: true,
});

const { fetchCategoryList } = useFetchCategoryApi();

// 分类信息获取
const { refresh: categoryRefresh, data: categoryData } = await useLazyAsyncData(
  "category",
  () =>
    fetchCategoryList({
      limit: 10000,
      page: 1,
    }),
  {
    default: () => ({ list: [], total: 0 }),
  }
);

const refreshData = async () => {
  await refresh();
  await categoryRefresh();
};

// ---------- 删除弹窗和需要使用的数据状态 --------
const deleteState = reactive({
  visible: false,
  list: [],
});

// 打开删除弹框
const handlerDeleteModalOpen = (ids) => {
  if (!Array.isArray(ids) || ids.length === 0) {
    return toast.add({
      title: "🙅请选择需要删除的数据",
      description: "没有选择任何数据就来删除是不行的!",
      color: "red",
      icon: "i-heroicons-exclamation-triangle",
      timeout: 1500,
    });
  }
  deleteState.list = ids.map((item) => item.id);
  deleteState.visible = true;
};
// 关闭删除弹窗触发事件,清理数据
const handlerDeleteModalClose = () => {
  deleteState.list = [];
  deleteState.visible = false;
};
// 删除数据
const handlerDeleteSubmit = async () => {
  await fetchLampDelete(deleteState.list);
  await refresh();
  toast.add({
    title: "数据已删除",
    color: "green",
    icon: "i-heroicons-check-circle",
    timeout: 1500,
  });
  selected.value = [];
  handlerDeleteModalClose();
};

// -------- 新建/修改灯具 -----------------
const formState = reactive({
  visible: false,
  title: "",
  loading: false,
  imgVisible: false,
  form: {
    id: null,
    name: "",
    price: "",
    stock: "",
    desc: "",
    recommend: false,
    Category: null,
    images: [],
    detail: "",
  },
});

// 打开灯具表单
const handlerFormOpen = (data = {}) => {
  formState.form = { ...formState.form, ...data };
  formState.visible = true;
};
const handlerFormClose = () => {
  formState.visible = false;
  formState.form = {
    id: null,
    name: "",
    price: "",
    stock: "",
    desc: "",
    recommend: false,
    Category: null,
    images: [],
    detail: "",
  };
};
// 创建灯具
const handlerCreateLamp = async (data) => {
  return await useAsyncData("create", () => fetchCreateLamp(data));
};
const handlerUpdateLamp = async () => {};
const handlerFormSubmit = async () => {
  const { Category, desc, id, images, name, price, recommend, detail, stock } =
    formState.form;
  const form = {
    id,
    desc,
    images,
    name,
    price,
    recommend,
    stock,
    detail,
    categoryId: Category.id,
  };

  if (formState.form.id) {
  } else {
    const { pending } = await handlerCreateLamp(form);
    formState.loading = pending;
  }
  await refreshData();
  handlerFormClose();
};
// ----- 图片上传/选择 -----

const handlerImageOpen = () => {
  formState.imgVisible = true;
};

const handlerImageClose = () => {
  formState.visible = true;
  formState.imgVisible = false;
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
          <UButton size="lg" @click="handlerFormOpen" icon="i-heroicons-plus">
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
    <UiModal
      v-model="deleteState.visible"
      color="red"
      :loading="pending"
      icon="i-heroicons-exclamation-circle"
      msg="确定要删除这个灯具吗?"
      btn-label="确定删除"
      close-label="不删了,留着吧"
      @close="handlerDeleteModalClose"
      @submit="handlerDeleteSubmit"
    />
    <!-- 添加/修改表单 -->
    <AdminPageSlideover
      @submit="handlerFormSubmit"
      :loading="formState.loading"
      :visible="formState.visible"
      @close="handlerFormClose"
    >
      <UForm :state="formState.form" class="grid flex-1 gap-y-4">
        <UFormGroup label="灯具名称">
          <UInput v-model="formState.form.name" />
        </UFormGroup>
        <UFormGroup label="简述信息">
          <UInput v-model="formState.form.desc" />
        </UFormGroup>
        <UFormGroup label="详细信息">
          <UTextarea v-model="formState.form.detail" />
        </UFormGroup>
        <UFormGroup label="价格">
          <UInput type="number" v-model="formState.form.price" />
        </UFormGroup>
        <UFormGroup label="库存">
          <UInput type="number" v-model="formState.form.stock" />
        </UFormGroup>
        <UFormGroup label="分类">
          <USelectMenu
            searchable
            searchable-placeholder="搜索分类名称"
            class="w-full"
            placeholder="选择所属分类"
            v-model="formState.form.Category"
            :options="categoryData.list"
            option-attribute="name"
          />
        </UFormGroup>
        <UFormGroup label="设为推荐">
          <UToggle v-model="formState.form.recommend" />
        </UFormGroup>
        <UFormGroup label="修改/添加图片">
          <UButton
            icon="i-heroicons-photo"
            @click="handlerImageOpen"
            label="打开图片设置"
            block
          />
        </UFormGroup>
      </UForm>
    </AdminPageSlideover>
    <!-- @close="handlerImageClose" -->

    <UiImageSelect
      :lamp-id="formState.form.id"
      @close="handlerImageClose"
      v-model="formState.form.images"
      :visible="formState.imgVisible"
    />
  </ClientOnly>
</template>
