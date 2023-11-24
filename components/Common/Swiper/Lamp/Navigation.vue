<script setup>
const swiper = useSwiper()
</script>
<template>
  <div
      class="gap-x-6 absolute w-full flex justify-center left-0 bottom-1 mx-auto lg:mx-0 lg:justify-end"
  >
    <button
        @click="swiper.slidePrev()"
        class="inline-flex p-1 rounded-full text-xl text-primary shadow-sm bg-white hover:shadow-md transition-all hover:scale-95"
    >
      <i class="i-carbon-chevron-left"/>
    </button>
    <button
        @click="swiper.slideNext()"
        class="inline-flex p-1 rounded-full text-xl text-primary shadow-sm bg-white hover:shadow-md transition-all hover:scale-95"
    >
      <i class="i-carbon-chevron-right"/>
    </button>
  </div>
</template>
