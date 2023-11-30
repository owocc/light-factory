<script setup>
// --------- 样式 UI 配置 --------------
const cardUi = {
    divide: 'divide-none', header: {
        padding: 'pt-3 pb-0 px-3 sm:px-3'
    }
}
// -------- 组件属性定义 ----------------

const props = defineProps({
    modalValue: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: 'i-heroicons-sparkles'
    },
    color: {
        type: String,
        validator: (val) => ['red', 'green', 'primary'].includes(val)
    },
    msg: {
        type: String,
        default: '提示信息'
    },
    btnLabel: {
        type: String,
        default: '确认'
    },
    loadLabel: {
        type: String,
        default: "处理中"
    },
    closeLabel: {
        type: String,
        default: '取消'
    }

})

const emit = defineEmits(['close', 'submit', 'update:modalValue'])

const value = computed({
    get: () => props.modalValue,
    set: (val) => emit('update:modalValue', val)
})

// 关闭弹窗时的事件
const handlerClose = () => {
    emit('close')
}

// 提交时的事件,会自动触发关闭事件
const handlerSubmit = () => {
    emit('submit')
}

</script>
<template>
    <UModal v-model="value" @close="handlerClose">
        <UCard :ui="cardUi">
            <!-- 操作按钮 -->
            <template #header>
                <div class="flex items-center justify-end">
                    <UiButtonClose @click="handlerClose" />
                </div>
            </template>

            <div class="flex flex-col items-center justify-center gap-y-4">
                <!-- 提示图标 -->
                <slot name="icon">
                    <Icon :name="props.icon" :class="`text-8xl text-${color}-600`" />
                </slot>
                <!-- 提示内容 -->
                <slot>
                    <p class="text-lg">{{ props.msg }}</p>
                </slot>
            </div>

            <!-- 底部操作 -->
            <template #footer>
                <slot name="footer">
                    <div class="flex justify-center gap-x-4 px-12 mx-auto items-center">
                        <UButton size="lg" :color="props.color" class="px-8" @click="handlerSubmit" :loading="loading"
                            :label="props.loading ? props.loadLabel : props.btnLabel" />

                        <UButton size="lg" color="gray" class="px-8" @click="handlerClose" :label="props.closeLabel" />
                    </div>
                </slot>
            </template>
        </UCard>
    </UModal>
</template>