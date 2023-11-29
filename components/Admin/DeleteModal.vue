<script setup lang="ts">
interface DeleteModalProps {
    modalValue?: boolean
    loading?: boolean
}
const props = withDefaults(defineProps<DeleteModalProps>(), {
    modalValue: false,
    loading: false
})

const emit = defineEmits<{
    (e: 'close'): void,
    (e: 'submit'): Promise<void> | void,
    (e: 'update:modalValue', val: boolean): void
}>()

const value = computed({
    get: () => props.modalValue,
    set(val) {
        emit('update:modalValue', val)
    }
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
    <UModal v-model="value">
        <UCard :ui="{
            divide: 'divide-none', header: {
                padding: 'pt-3 pb-0 px-3 sm:px-3'
            }
        }">

            <template #header>
                <div class="flex items-center justify-end">
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                        @click="handlerClose" />
                </div>
            </template>

            <div class="flex flex-col items-center justify-center gap-y-4">
                <slot name="icon">
                    <Icon name="i-heroicons-exclamation-circle" class="text-8xl text-red-600" />
                </slot>
                <slot>
                    <p class="text-lg">是否确定要删除选择的分类数据?</p>
                </slot>
            </div>

            <template #footer>
                <div class="flex justify-center gap-x-4 px-12 mx-auto items-center">
                    <UButton size="lg" color="red" class="px-8" @click="handlerSubmit" :loading="loading">{{
                        props.loading ? '删除中' : '确定删除' }}</UButton>
                    <UButton size="lg" color="gray" class="px-8" @click="handlerClose">取消</UButton>
                </div>
            </template>
        </UCard>
    </UModal>
</template>