<script setup>
import {gsap} from 'gsap'
import clsx from 'clsx'

const PinNav = inject('PinNav')
const menu = ref()
const handlerToggleMenu = (state) => {
  gsap.to(menu.value, {
    top: state ? 0 : '-100%',
    duration: 0.4,
  })
}
</script>

<template>
  <!-- 导航菜单 -->
  <div
      ref="menu"
      class="fixed left-0 -top-full divide-fuchsia-400 bg-base-body w-full p-16 z-50 lg:top-0 lg:bg-transparent lg:relative lg:p-0 border-b lg:border-none"
  >
    <ul class="flex flex-col text-center gap-y-8 lg:flex-row lg:gap-16">
      <li v-for="item in 4">
        <!-- lg:bg-gradient-to-r lg:from-primary lg:to-gray-800 lg:text-transparent lg:bg-clip-text -->
        <a
            href="#"
            class="text-base hover:bg-third-gradient hover:bg-clip-text hover:text-transparent "
            :class="PinNav ? 'lg:text-base-title' : 'lg:text-gray-200'"
        >页面链接</a
        >
      </li>
    </ul>
    <!-- 关闭按钮 -->
    <div
        @click="handlerToggleMenu(false)"
        class="flex cursor-pointer absolute top-4 right-6 text-2xl text-base-title lg:hidden"
    >
      <Icon name="i-carbon-close"/>

    </div>
  </div>

  <!-- 切换按钮 -->
  <div
      @click="handlerToggleMenu(true)"
      :class="
      clsx(
        'flex cursor-pointer text-lg  transition-colors duration-500 lg:hidden',
        PinNav ? 'text-base-title' : 'text-white'
      )
    "
  >
    <Icon name="i-carbon-menu"/>
  </div>
</template>
