<template>
  <Swiper
      class="!grid !py-10 !pb-16 !relative !px-16 !md:px-0"
      loop
      slides-per-view="auto"
      centered-slides
      :breakpoints="{
      768: {
        centeredSlides: false,
      },
    }"
  >
    <SwiperSlide v-for="item in 12" class="!w-auto">
      <CommonCardProductCard/>
    </SwiperSlide>
    <!--    <template #container-end>-->
    <!--      <CommonSwiperLampNavigation/>-->
    <!--    </template>-->
  </Swiper>
</template>
