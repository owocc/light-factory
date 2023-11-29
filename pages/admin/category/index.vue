<script setup>
const toast = useToast()
// 表格-字段映射
const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'name',
  label: '分类名称'
}, {
  key: 'parent.name',
  label: '父级分类'
}, {
  key: 'createAt',
  label: '创建时间'
},
{
  key: 'updateAt',
  label: '更新时间'
},
{
  key: 'actions'
}]

// 表格-操作按钮
const tableActions = (row) => [
  [{
    label: '查看详情',
    icon: 'i-heroicons-eye-20-solid',
    click: () => {
      state.id = row.id
      state.name = row.name
      state.parent = typeList.value.list.filter(e => e.id === row.parentId)[0]
      handlerOpenForm()
    }
  },],
  [
    {
      label: '编辑分类',
      icon: 'i-heroicons-pencil-square-20-solid',
      click: () => {
        state.id = row.id
        state.name = row.name
        state.parent = typeList.value.list.filter(e => e.id === row.parentId)[0]
        handlerOpenForm()
      }
    }, {
      label: '删除分类',
      icon: 'i-heroicons-trash-20-solid',
      click: async () => {
        deleteList.value = [row.id]
        handlerOpenDelete()
      }
    }]
]

// 页面操作按钮
const pageActions = [
  {
    icon: 'i-heroicons-arrow-path',
    text: '刷新数据',
    click: () => { refresh() }
  },
  {
    icon: 'i-heroicons-trash',
    text: '删除选中的数据',
    click: () => {
      deleteList.value = selected.value.map(item => item.id)
      handlerOpenDelete()
    }
  }
]

// 表格-选择
const selected = ref([])

// 查询参数
const query = reactive({
  name: '',
  page: 1,
  limit: 5
})
const { name, page, limit } = toRefs(query)

const { fetchCategoryList, fetchDeleteCategory, fetchAddCategory, fetchCategoryTypeList, fetchUpdateCategory } = useFetchCategoryApi()


// 对于管理端的数据都是异步获取的,都是通过监听获取数据
// 页面数据获取
const { pending, data: category, refresh } = await useLazyAsyncData(
  `category`,
  () => fetchCategoryList(query),
  {
    default: () => ({ list: [], total: 0 }),
    watch: [name, page, limit],
  }
)

// 删除数据
const deleteModalVisible = ref(false)
const deleteList = ref([])

const handlerOpenDelete = async () => {
  deleteModalVisible.value = true
}
const handlerCloseDelete = () => {
  // 清空待删除的数据
  deleteList.value = []
  deleteModalVisible.value = false
}

const delLoading = ref(false)
const handlerFetchDelete = async () => {
  delLoading.value = true
  await fetchDeleteCategory(deleteList.value)
  selected.value = []
  await refresh()
  delLoading.value = false
  handlerCloseDelete()
  toast.add({
    title: '删除成功', timeout: 1000, icon: "i-heroicons-check-circle",
    description: "所选分类数据已删除,分类中所有灯具数据已迁移至其它"
  })
}

// 添加数据
const formVisible = ref(false)
const state = reactive({
  id: null,
  name: null,
  parent: undefined,
})
const handlerOpenForm = () => {
  formVisible.value = true
}
// 处理添加数据
const handlerAdd = async () => {
  await fetchAddCategory({
    name: state.name,
    parentId: state.parent.id
  })

  toast.add({
    title: '添加成功', timeout: 1000, icon: "i-heroicons-check-circle",
  })
}
const handlerFormClose = () => {
  state.name = null
  state.parent = undefined
  state.id = undefined
  formVisible.value = false
}
const { refresh: refreshTypeList, data: typeList } = useLazyAsyncData('typeList',
  () => fetchCategoryTypeList(),
  {
    default: () => ({ list: [], total: 0 })
  }
)
const handlerUpdate = async () => {
  await fetchUpdateCategory({
    name: state.name,
    parentId: state.parent.id,
    id: state.id
  })

  toast.add({
    title: '修改成功', timeout: 1000, icon: "i-heroicons-check-circle",
  })
}
const handlerFormSubmit = async () => {
  if (state.id) {
    await handlerUpdate()
  } else {
    await handlerAdd()

  }
  handlerFormClose()
  await refresh()
}
</script>

<template>
  <UiPageContainer>
    <template #header>
      <UiPageHeader title="分类管理">
        <template #action>
          <div class="pr-2 border-r-2 border-gray-100 dark:border-gray-700">
            <UInput placeholder="输入要查询的分类名" size="lg" v-model="name">
            </UInput>
          </div>
          <UiButtonActions :items="pageActions" />
        </template>

        <template #option>
          <UButton size="lg" icon="i-heroicons-plus" @click="handlerOpenForm">
            添加分类
          </UButton>
        </template>
      </UiPageHeader>
    </template>


    <UTable v-model="selected" :rows="category.list" :columns="columns" :loading="pending">
      <template #actions-data="{ row }">
        <UDropdown :items="tableActions(row)">
          <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
        </UDropdown>
      </template>
    </UTable>

    <template #footer>
      <UiPagination v-model:page="page" :total="category.total" v-model:limit="limit" :limitOptions="[5, 10, 20, 30]" />
    </template>
  </UiPageContainer>


  <ClientOnly>
    <!-- 删除数据弹框 -->
    <AdminDeleteModal :loading="delLoading" @submit="handlerFetchDelete" v-model="deleteModalVisible"
      @close="handlerCloseDelete" />


    <!-- 添加/修改表单 -->
    <AdminPageSlideover :loading="false" v-model:visible="formVisible" @submit="handlerFormSubmit" @close="handlerFormClose">
      <UForm class="flex flex-col gap-y-4" :state="state" @submit="handlerAdd">
        <UFormGroup label="分类名称" size="lg">
          <UInput v-model="state.name" color="gray"></UInput>
        </UFormGroup>
        <UFormGroup label="父级分类" size="lg">
          <USelectMenu placeholder="请选择父级分类" v-model="state.parent" :options="typeList.list" optionAttribute="name">
          </USelectMenu>
        </UFormGroup>
      </UForm>
    </AdminPageSlideover>
    <!-- <USlideover v-model="formVisible">
      <UCard class="flex flex-col flex-1" :ui="{
        body: { base: 'flex-1' },
        header: {
          padding: 'pb-0'
        },
        ring: '', divide: 'divide-none', rounded: 'rounded-none'
      }">
        <template #header>
          <div class="flex justify-between items-center">
            <h1>添加分类</h1>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" />
          </div>
        </template>


        <UForm class="flex flex-col gap-y-4" :state="state" @submit="handlerAdd">
          <UFormGroup label="分类名称" size="lg">
            <UInput v-model="state.name" color="gray"></UInput>
          </UFormGroup>
          <UFormGroup label="父级分类" size="lg">
            <USelectMenu placeholder="请选择父级分类" v-model="state.parent" :options="typeList.list" optionAttribute="name">
            </USelectMenu>
          </UFormGroup>
        </UForm>

        <template #footer>
          <div class="grid items-center grid-cols-2 gap-x-4">
            <UButton class="w-full" block size="lg" @click="handlerFormSubmit">确定</UButton>
            <UButton class="w-full" block color="gray" size="lg" @click="handlerFormClose">取消</UButton>
          </div>
        </template>
      </UCard>
    </USlideover> -->
  </ClientOnly>
</template>
