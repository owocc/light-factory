<script setup lang="ts">
interface StateIconProp {
  name: string
  name2: string
}

const props = defineProps<StateIconProp>()
const base = ref(false)
const switchState = () => {
  base.value = !base.value
}
</script>
<template>
  <div @click="switchState" class="inline-flex items-center">
    <Icon :name="base ? props.name : props.name2"
          v-bind="$attrs"/>
  </div>
</template>
