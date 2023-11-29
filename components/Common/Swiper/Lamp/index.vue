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
    <SwiperSlide v-for="item in 12" class="!w-auto">
      <CommonCardProduct/>
    </SwiperSlide>
  </Swiper>
</template>
