<script setup>
const props = defineProps({
  lamps: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <Swiper
    class="!grid !pb-16 !relative !md:px-0 !pt-4"
    slides-per-view="auto"
    centered-slides
    :breakpoints="{
      768: {
        centeredSlides: false,
      },
    }"
  >
    <SwiperSlide v-for="item in lamps" :key="item.id" class="!w-auto">
      <CommonCardProduct v-bind="item" />
    </SwiperSlide>
    <!-- <template> </template> -->
    <!-- <CommonSwiperLampNavigation /> -->
  </Swiper>
</template>
