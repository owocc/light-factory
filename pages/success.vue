<template>
  <div
    class="max-w-6xl mx-auto flex justify-center items-center flex-col py-24 gap-12"
  >
    <div class="text-center">
      <h1 class="text-3xl mb-4">付款成功</h1>
      <p>感谢您的信任,我们将尽快为你配送货物</p>
    </div>
    <Icon
      name="i-carbon-checkmark-filled"
      class="text-8xl text-primary outline-8 outline-primary-alt rounded-full  outline-offset-2"
    />
    <NuxtLink
      to="/"
      class="py-2 px-8 bg-third-gradient text-white rounded-full hover:scale-105 transition-all"
      >返回首页</NuxtLink
    >
  </div>
</template>
