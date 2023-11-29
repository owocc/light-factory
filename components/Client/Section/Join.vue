<template>
  <section class="pt-48 lg:pt-80">
    <!-- Container -->
    <div class="px-6 max-6xl mx-auto grid">
      <div
          class="inline-grid dark:bg-container-dark justify-self-center bg-container px-6 md:px-12 pb-6 md:grid-cols-2 lg:pb-0 lg:grid-cols-[450px 380px] lg:h-[442px] lg:gap-x-24">

        <!-- Lamp Image Card -->
        <CommonCardLamp class="-translate-y-1/4 lg:-translate-y-[8.5rem]"/>

        <!-- Customization Form -->
        <div
            class="pt-10 grid items-start gap-y-8 grid-rows-[max-content] h-full lg:h-[442px] lg:justify-center lg:pt-24">
          <div class="text-center md:text-left max-w-sm">
            <h2 class="text-2xl font-medium lg:text-6xl mb-4 lg:font-bold">
              私人定制
            </h2>
            <p>
              请在下方留下您的邮箱，我们将为您提供个性化定制服务，期待为您创造独一无二、温暖而贴心的灯具。
            </p>
            <p class="text-sm text-gray-400">我们的工作人员将尽快联系您，以确保您的需求得到最完美的满足。</p>
          </div>

          <!-- Customization Request Form -->
          <form class="grid gap-3 md:grid-cols-[1fr,max-content] md:gap-2 md:bg-base-body md:rounded-full">
            <input type="email" placeholder="请输入您的邮箱" class="w-full dark:text-base-title bg-base-body py-4 px-6 rounded-full"/>
            <button class="bg-third-gradient rounded-full py-4 px-8 text-white text-center font-medium">
              发送定制请求
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>
