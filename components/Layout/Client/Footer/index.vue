<script setup lang="ts">
const {footerLinks} = useClientNavConfig()
</script>

<template>
  <footer class="pt-32">
    <div class="px-6 pb-12 max-w-6xl mx-auto">
      <div class="grid gap-y-12 gap-8 md:grid-cols-[max-content,1fr]">
        <div class="max-w-md lg:min-w-[24rem]">
          <div class="mb-4 ">
            <CommonLogo dark/>
          </div>
          <p>星光灯坊，独特设计，温馨照明。精选灯具，点亮生活。</p>
        </div>
        <!-- footer data -->
        <div
            class="grid grid-cols-2 gap-y-10 gap-x-16 md:grid-cols-3 xl:grid-cols-4"
        >
          <LayoutClientFooterSiteLink v-for="item in footerLinks" :title="item.title" :links="item.links"/>
        </div>
      </div>
      <!-- footer group -->
      <div
          class="mt-16 flex flex-col text-center md:flex-row md:justify-between items-center text-sm gap-y-4"
      >
        <div class="flex justify-center gap-x-6 md:order-1">
          <!-- 一则隐私政策 -->

          <UiLink href="#">条款和协议</UiLink>
          <UiLink href="#">隐私政策</UiLink>
        </div>
        <span>

          © 2023 星光灯坊
        </span>
      </div>
    </div>
  </footer>
</template>
