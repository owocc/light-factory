<script setup lang="ts">

</script>
<template>
  <article
      class="relative dark:hover:outline-primary dark:hover:outline outline-offset-2 outline outline-transparent w-48 h-92 bg-container rounded-t-full px-3 pt-3 pb-4 ms-4  transition-all ease-out hover:shadow-xl dark:hover:shadow-none hover:shadow-slate-200 cursor-pointer group dark:bg-container-dark"
  >
    <div class="bg-base-body h-56 rounded-t-full mb-3 overflow-hidden dark:bg-base-body-dark">
      <img src="/img/modern-lamp.png" alt=""
           class="block w-32 mx-auto -translate-y-2 group-hover:translate-y-0 transition-transform"/>
    </div>

    <h3 class="font-medium mb-1 dark:text-white">名称</h3>
    <span class="block text-sm font-medium mb-4">简述</span>
    <h3 class="text-2xl dark:text-white"><span class="text-primary">$</span>99</h3>
    <button
        class="inline-flex p-1 bg-third-gradient rounded-lg text-xl text-white shadow-sm shadow-primary absolute right-3 bottom-4 hover:scale-110 transition-all ease-in-out hover:shadow-md hover:shadow-primary"
    >
      <Icon name="i-carbon-add"/>
    </button>
  </article>
</template>
