<script setup>
const { $clsx } = useNuxtApp();
const toast = useToast();
const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
  },
  visible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "close"]);
const { tailwindBorderStyle, tailwindBGStyle } = useTailwindcssConfig();

const { fetchImageList } = useImageApi();

const { data, refresh, pending } = await useLazyAsyncData(
  "images",
  fetchImageList,
  {
    default: () => ({ list: [], total: 0 }),
    transform: (fetchData) => ({
      list: (fetchData.list = fetchData.list.map((e) => ({
        ...e,
        select: false,
      }))),
      total: fetchData.total,
    }),
  }
);

const actions = [
  {
    icon: "i-heroicons-archive-box-x-mark",
    text: "清空选择",
    click: () => {
      handlerClearSelected();
    },
  },
  {
    icon: "i-heroicons-arrow-path",
    text: "刷新",
    click: () => {
      emit("update:modelValue", []);
      refresh();
    },
  },
];

// 选择数据时对数据进行切换
const handlerSwitchSelect = (image) => {
  image.select = !image.select;
};
const handlerClearSelected = () => {
  data.value.list.forEach((e) => (e.select = false));
  emit("update:modelValue", []);
};

const file = ref();
// 图片上传
const handlerUploadFile = async () => {
  const fileList = file.value.files;
  const { fileUpload } = useFileUpload();
  if (fileList.length === 0)
    return toast.add({
      title: "请选择要上传的文件",
      timeout: 800,
      color: "red",
    });
  fileUpload(fileList[0], refresh);
};

const handlerModalClose = () => {
  emit("close");
};
const handlerModalSubmit = () => {
  const updateList = data.value.list.filter((e) => e.select == true);
  emit("update:modelValue", updateList);
  handlerModalClose()
};
</script>
<template>
  <AdminPageSlideover
    @close="handlerModalClose"
    @submit="handlerModalSubmit"
    title="图片设置"
    :visible="props.visible"
  >
    <div class="flex flex-col gap-y-4">
      <div
        :class="tailwindBGStyle"
        class="flex items-center gap-x-2 justify-between"
      >
        <label class="text-sm">上传图片</label>
        <UiButtonActions :items="actions" />
      </div>

      <div
        :class="
          $clsx(
            'flex items-center hover:bg-gray-100 transition-all dark:hover:bg-gray-700 border justify-between rounded-md p-2',
            tailwindBorderStyle,
            tailwindBGStyle
          )
        "
      >
        <input type="file" class="w-full" ref="file" />

        <UButton
          @click="handlerUploadFile"
          label="上传"
          icon="i-heroicons-arrow-up-tray"
        />
      </div>

      <UiEmpty :visible="data.list.length > 0" :loading="pending">
        <div class="h-[60vh] overflow-y-scroll scrollbar-hide">
          <div class="grid grid-cols-3 gap-4">
            <div
              @click="handlerSwitchSelect(item)"
              :class="
                $clsx(
                  tailwindBorderStyle,
                  item.select &&
                    'border-primary dark:bg-primary dark:bg-opacity-10 dark:border-primary bg-primary bg-opacity-25'
                )
              "
              class="overflow-hidden cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all p-2 w-full border"
              v-for="item in data.list"
              :key="item.id"
            >
              <img
                :src="item.url"
                alt=""
                class="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </UiEmpty>
    </div>
  </AdminPageSlideover>
</template>
