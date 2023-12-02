<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "名称",
  },
  desc: {
    type: String,
    default: "简述",
  },
  price: {
    type: String,
    default: "0",
  },
  icon: {
    type: String,
    default: "i-carbon-add",
  },
  image: {
    type: String,
    default: "/img/modern-lamp.png",
  },
});
// const textMax =
</script>
<template>
  <article
    class="relative !h-full dark:hover:outline-primary dark:hover:outline outline-offset-2 outline outline-transparent w-48 h-92 bg-container rounded-t-full px-3 pt-3 pb-4 ms-4 transition-all ease-out hover:shadow-xl dark:hover:shadow-none hover:shadow-slate-200 cursor-pointer group dark:bg-container-dark flex flex-col"
  >
    <div
      class="bg-base-body h-56 rounded-t-full mb-3 overflow-hidden dark:bg-base-body-dark"
    >
      <img
        :src="props.image"
        class="block w-32 mx-auto -translate-y-2 group-hover:translate-y-0 transition-transform"
      />
    </div>

    <div class="flex-1 flex flex-col justify-between">
      <div>
        <h3 class="font-medium mb-1 dark:text-white">{{ props.name }}</h3>
        <span class="block text-sm font-medium mb-4">{{ props.desc }}</span>
      </div>
      <h3 class="text-2xl dark:text-white">
        <span class="text-primary">$</span>{{ props.price }}
      </h3>
    </div>

    <button
      class="inline-flex p-1 bg-third-gradient rounded-lg text-xl text-white shadow-sm shadow-primary absolute right-3 bottom-4 hover:scale-110 transition-all ease-in-out hover:shadow-md hover:shadow-primary"
    >
      <Icon :name="props.icon" />
    </button>
  </article>
</template>
