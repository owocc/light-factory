<script setup>

</script>
<template>
  <section class="pt-32">
    <!-- container -->
    <div class="px-6 max-w-6xl mx-auto">
      <div class="grid gap-y-12">
        <!-- data -->
        <div class="text-center mb-8 max-w-sm mx-auto">
          <!-- title -->
          <h2 class="text-2xl mb-4 md:text-center lg:text-5xl">探索更多精彩选择</h2>
          <p class="text-gray-400">
            开启探索之旅，发现无尽选择。
            <br/>每款产品都蕴含独特设计，为你的空间注入精致光彩，打造个性化生活氛围。
          </p>
        </div>

        <!-- 探索商品,给出 -->
        <div
            class="grid gap-8 justify-center sm:grid-cols-[repeat(2,max-content)] md:grid-cols-[repeat(3,max-content)] lg:grid-cols-[repeat(4,max-content)]"
        >
          <CommonCardProduct v-for="item in 8"/>
        </div>
      </div>
    </div>
  </section>
</template>
