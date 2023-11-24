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
          <h2 class="text-2xl mb-4 md:text-center lg:text-5xl">更多灯具</h2>
          <p>
            描述信息描述信息描述信息描述信息描述
            信息描述信息描述信息描述信息描述信息
            信息描述信息描述信息描述信息描述信息
          </p>
        </div>

        <!-- content -->
        <div
            class="grid gap-8 justify-center sm:grid-cols-[repeat(2,max-content)] md:grid-cols-[repeat(3,max-content)] lg:grid-cols-[repeat(4,max-content)]"
        >
          <CommonCardProductCard v-for="item in 8"/>
        </div>
      </div>
    </div>
  </section>
</template>
