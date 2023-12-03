<script setup>
const props = defineProps({
  name: String,
  name2: String,
  state: Boolean,
});
const emit = defineEmits(["switch"]);
const switchState = () => {
  emit("switch");
};
</script>
<template>
  <div @click="switchState" class="inline-flex items-center">
    <Icon :name="props.state ? props.name : props.name2" v-bind="$attrs" />
  </div>
</template>
