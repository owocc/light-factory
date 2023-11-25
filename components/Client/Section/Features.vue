<template>
  <section class="pt-32" id="features">
    <div
        class="px-6 grid gap-12 max-w-6xl mx-auto md:grid-cols-2 md:items-center"
    >
      <CommonCardLamp/>
      <!-- content -->
      <div class="grid gap-y-8 lg:-order-1">
        <!-- data -->
        <div class="text-center max-w-sm mx-auto">
          <!-- title -->
          <h2 class="text-2xl mb-4 lg:text-5xl">特色亮点</h2>
          <!-- description -->
          <p>
            独一无二的设计与高效照明，星光与灯完美融合，赋予您的空间别样魅力
          </p>
        </div>
        <!-- info -->
        <div class="grid grid-cols-2 gap-6">
          <LazyCommonCardFeatures v-for="item in 4"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.background-second-gradient {
  background: var(--second-gradient) padding-box,
  linear-gradient(90deg, #e69065 0%, #f4bfa4 100%) border-box;
}
</style>
