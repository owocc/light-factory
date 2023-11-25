<template>
  <section class="pt-6 relative lg:pt-24">
    <!-- bg -->
    <div
        class="absolute top-0 left-0 w-full bg-base-dark h-[95%] md:h-[110%] lg:h-[95%] clip-bg"
    ></div>

    <!-- container -->
    <div
        class="px-6 grid relative pt-10 gap-14 md:gap-x-16 md:pb-8 md:grid-cols-2 md:items-center max-w-7xl mx-auto lg:pt-0 z-20 lg:items-start"
    >
      <!-- content -->
      <div class="grid gap-y-12 md:order-1">
        <!-- data -->
        <div class="text-center md:text-left">
          <h3
              class="bg-third-gradient font-normal mb-2 text-transparent bg-clip-text"
          >
            一盏灯
          </h3>
          <h1 class="text-white text-3xl font-medium mb-4 md:text-6xl ">
            光影悠香 <br/>

          </h1>
          <h2 class="text-4xl text-white  mb-6 lg:text-7xl">温暖心房</h2>

          <!-- buttons -->
          <div class="flex gap-x-4 justify-center md:justify-normal">
            <a
                href="#"
                class="inline-flex group items-center hover:pl-14 gap-x-1 bg-third-gradient py-3 transition-all px-12 rounded-full text-white font-medium shadow-lg"
            >
              发现更多
              <Icon name="i-carbon-edt-loop" class="text-xl group-hover:ml-2 transition-all duration-300 ease-in-out"/>
            </a
            >

            <button class="flex items-center justify-center gap-x-2 group hover:text-primary transition-all ease-in-out">
              <Icon name="i-carbon-play-outline" class=" text-2xl"/>
              播放视频
            </button>
          </div>
        </div>

        <!-- home info -->
        <div
            class="flex justify-center gap-x-8 text-center md:justify-normal md:text-left"
        >
          <div v-for="item in 3">
            <h3 class="text-white text-2xl mb-2 font-medium lg:text-4xl">
              9K<span class="text-primary">+</span>
            </h3>
            <span class="text-sm">主页内容内容</span>
          </div>
        </div>
      </div>
      <CommonCardLamp theme="first" lamp-image="/img/home-lamp.png"/>
    </div>
  </section>
</template>

<style scoped>
.clip-bg {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 88%);
}

</style>
<script setup lang="ts">
</script>
