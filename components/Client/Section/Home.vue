<script setup lang="ts">
const showVideo = ref(false);
</script>
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
      <div class="grid gap-y-12 md:order-1 lg:pt-16">
        <div class="text-center md:text-left">
          <h3
            class="bg-third-gradient font-normal mb-2 text-transparent bg-clip-text dark:text-transparent"
          >
            点亮一盏灯
          </h3>
          <h1 class="text-white text-4xl font-medium mb-4 lg:text-7xl">
            光影悠香 <br />
          </h1>
          <h2 class="text-4xl text-white mb-6 lg:text-7xl">温暖心房</h2>
          <!-- buttons -->
          <div class="flex gap-x-4 justify-center md:justify-normal">
            <UiButton to="/all" label="发现更多" icon="i-carbon-compass" />
            <teleport to="body">
              <UModal
                v-model="showVideo"
                :ui="{
                  base: 'items-center gap-4 p-2 dark:!bg-base-dark',
                  width: 'md:max-w-2xl lg:max-w-3xl',
                  container: 'items-center',
                  overlay: {
                    background:
                      'backdrop-blur-lg bg-white/10 dark:bg-base-body-dark/10',
                  },
                }"
              >
                <video
                  src="/voide/lamp.mp4"
                  controls
                  class="rounded-md"
                  ref="voide w-full"
                />
                <button
                  @click="showVideo = false"
                  class="text-2xl text-white bg-third-gradient inline-flex rounded-full p-2 transition-all active:scale-95"
                >
                  <Icon name="i-carbon-close" />
                </button>
              </UModal>
            </teleport>
            <button
              @click="showVideo = true"
              class="flex items-center justify-center text-gray-400 gap-x-2 group hover:text-primary transition-all ease-in-out"
            >
              <Icon name="i-carbon-play-outline" class="text-2xl" />
              播放视频
            </button>
          </div>
        </div>

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
      <CommonCardLamp theme="first" lamp-image="/img/home-lamp.png" />
    </div>
  </section>
</template>

<style scoped>
.clip-bg {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 88%);
}
</style>
