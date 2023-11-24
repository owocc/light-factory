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
            副标题
          </h3>
          <h1 class="text-white text-3xl font-medium mb-6 md:text-6xl">
            文字 <br/>
            字数多的文字
          </h1>

          <!-- buttons -->
          <div class="flex gap-x-4 justify-center md:justify-normal">
            <a
                href="#"
                class="inline-block bg-third-gradient py-3 px-12 rounded-full text-white font-medium shadow-lg"
            >探索更多</a
            >

            <a href="#" class="flex items-center justify-center gap-x-2">
              <i class="i-carbon-play-outline text-2xl"/> 播放视频
            </a>
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

      <!-- home img -->
      <div class="relative justify-self-center">
        <div
            class="w-64 h-80 border-[6px] border-transparent linear-gradient-bg rounded-t-full lg:w-[400px] lg:h-[520px] lg:border-8"
        >
          <img
              src="/img/home-lamp.png"
              alt=""
              class="w-56 mx-auto -translate-y-[6px] lg:w-[380px] lg:-translate-y-[8px]"
          />
          <h1
              class="text-center text-5xl -tracking-tighter text-white text-opacity-30 font-medium lg:text-8xl"
          >
            LIGHT
          </h1>
        </div>
        <!-- shadow -->
        <div
            class="absolute w-52 h-8 bg-primary bg-opacity-60 -bottom-3 inset-x-0 mx-auto blur-md -z-10 lg:w-[350px] lg:blur-lg lg:h-14"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.clip-bg {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 88%);
}

.linear-gradient-bg {
  background: var(--first-gradient) padding-box,
  linear-gradient(90deg, #d65429 0%, #efc0a9 100%) border-box;
}
</style>
