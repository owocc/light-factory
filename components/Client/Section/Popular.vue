<script setup>
const { fetchRecommendList } = useLampApi();
const { data } = await fetchRecommendList();
</script>
<template>
  <section class="pt-32 overflow-hidden" id="popular">
    <div class="px-6 max-w-6xl mx-auto">
      <div class="text-center md:text-left">
        <h2
          class="text-3xl font-medium mb-6 md:text-4xl lg:text-5xl lg:font-bold"
        >
          灯具推荐
        </h2>
        <p class="text-gray-400 mb-4">
          精选推荐，添<span class="text-primary">亮</span>你的空间
        </p>
      </div>
      <CommonSwiperLamp :lamps="data.list || []" />
    </div>
  </section>
</template>
