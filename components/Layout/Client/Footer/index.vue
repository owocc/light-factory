<script setup>
provide('PinNav', true)
</script>
<template>
  <footer class="pt-32">
    <div class="px-6 pb-12 max-w-6xl mx-auto">
      <div class="grid gap-y-12 gap-8 md:grid-cols-[max-content,1fr]">
        <div class="max-w-sm">
          <div class="mb-4 ">
            <CommonLogo/>
          </div>
          <div>网站描述网站描述网站描述网站描述网站描述网站描述网站描述</div>
        </div>
        <!-- footer data -->
        <div
            class="grid grid-cols-2 gap-y-10 gap-x-16 md:grid-cols-3 xl:grid-cols-4"
        >
          <div v-for="itemf in 3">
            <h3 class="text-md font-medium mb-4">相关链接分类</h3>
            <ul class="grid gap-y-3">
              <li v-for="item in 3">
                <a href="#" class="transition-colors text-sm hover:text-primary"
                >网站相关链接</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-medium mb-4">社交平台</h3>
            <ul class="flex gap-x-3">
              <li>
                <a href="#" class="text-2xl">
                  <span
                      class="i-carbon-logo-wechat bg-third-gradient transition-transform hover:-translate-y-1"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- footer group -->
      <div
          class="mt-16 flex flex-col text-center md:flex-row md:justify-between items-center text-sm gap-y-4"
      >
        <div class="flex justify-center gap-x-6 md:order-1">
          <a href="">条款和协议</a>
          <a href="">隐私政策</a>
        </div>
        <span>
          <!-- 一则隐私政策 -->
          © 2023 by 星光 . All rights reserved.
        </span>
      </div>
    </div>
  </footer>
</template>
