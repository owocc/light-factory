<script setup lang="ts">
interface PaginationProps {
    total: number
    size?: 'lg'
    max?: number
    limit?: number
    limitOptions?: number[]
    page: number
}
const props = withDefaults(defineProps<PaginationProps>(), {
    max: 7,
    limit: 10,
    size: 'lg'
})
const emit = defineEmits<{
    (e: 'update:page', val: number): void,
    (e: 'update:limit', val: number): void,
}>()

const page = computed({
    get() {
        return props.page
    },
    set(val) {
        emit('update:page', val)
    }
})
const limit = computed({
    get() {
        return props.limit
    },
    set(val) {
        emit('update:limit', +val)
    }
})
</script>
<template>
    <div class="flex items-center gap-x-4">
        <div class="flex items-center gap-x-3">
            <span class="text-sm dark:text-gray-400">分页数量</span>
            <USelect :size="props.size" :options="props.limitOptions" v-model="limit" />
        </div>
        <UPagination :size="props.size"
            :prev-button="{ icon: 'i-heroicons-chevron-left-20-solid', label: '上一页', color: 'gray' }"
            :next-button="{ icon: 'i-heroicons-chevron-right-20-solid', trailing: true, label: '下一页', color: 'gray' }"
            v-model="page" :total="props.total" :max="props.max" :page-count="props.limit" />
    </div>
</template>