<script setup>
// --------- 组件主题配置 ---------------
const cardUi = {
  body: { base: "flex-1" },
  header: {
    padding: "pb-0",
  },
  ring: "",
  divide: "divide-none",
  rounded: "rounded-none",
};

// -------- props 定义 ---------------
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "表单标题",
  },
  submitText: {
    //提交按钮文字
    type: String,
    default: "确定",
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

// -------- emit 事件定义 ---------------
const emit = defineEmits(["update:visible", "close", "submit"]);

// ------- 组件参数二次封装 ---------------
const visible = computed({
  get: () => props.visible,
  set: (visible) => emit("update:visible", visible),
});

// -------- 组件事件定义 ------------------

// 关闭弹出窗口事件
const handlerClose = () => {
  emit("close");
  emit("update:visible", false);
};

// 表单提交事件
const handlerFormSubmit = () => {
  emit("submit");
};
</script>

<template>
  <!-- 添加/修改表单 -->
  <USlideover v-bind="$attrs" :model-value="visible">
    <UCard class="flex flex-col flex-1" :ui="cardUi">
      <template #header>
        <!-- 头部插槽区域,用来放置一些操作按钮/标题之类的,默认为一个标题和按钮 -->
        <slot name="header">
          <div class="flex justify-between items-center">
            <h1>{{ props.title }}</h1>
            <UiButtonClose @click="handlerClose" />
          </div>
        </slot>
      </template>

      <!-- 主插槽区域,用来放置表单或者其它内容 -->
      <div>
        <slot />
      </div>

      <template #footer>
        <slot name="footer">
          <div class="grid items-center grid-cols-2 gap-x-4">
            <UButton
              :loading="props.loading"
              class="w-full"
              block
              size="lg"
              @click="handlerFormSubmit"
            >
              {{ props.submitText }}
            </UButton>

            <UButton
              class="w-full"
              block
              color="gray"
              size="lg"
              @click="handlerClose"
            >
              取消
            </UButton>
          </div>
        </slot>
      </template>
    </UCard>
  </USlideover>
</template>
