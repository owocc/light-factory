<script setup lang="ts">
interface ButtonActionsProps {
    size?: 'lg',
    color?: 'gray' | 'white'
    variant?: 'ghost'
    items?: {
        icon: string,
        text: string,
        click?: () => void
    }[]
}

const props = withDefaults(defineProps<ButtonActionsProps>(), {
    size: 'lg',
    color: 'gray',
    variant: 'ghost',
    items: () => []
})
</script>
<template>
    <div>
        <UTooltip v-for="(item, index) in props.items" :key="index" :text="item.text">
            <UButton :color="props.color" :variant="props.variant" :size="props.size" :icon="item.icon"
                @click="() => item.click && item.click()" />
        </UTooltip>
    </div>
</template>