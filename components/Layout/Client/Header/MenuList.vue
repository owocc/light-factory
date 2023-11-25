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
const menuListContainerClasses = clsx(
    'fixed left-0 -top-full divide-fuchsia-400 bg-base-body w-full p-16 z-50 border-b ',
    'lg:top-0 lg:bg-transparent lg:relative lg:p-0 lg:border-none',
    'dark:bg-container-dark dark:border-none'
)

const {navbarMenuList} = useClientNavConfig()

</script>

<template>
  <!-- 导航菜单 -->
  <div
      ref="menu"
      :class="menuListContainerClasses"
  >
    <ul class="flex flex-col text-center gap-y-8 lg:flex-row lg:gap-16">
      <li v-for="menu in navbarMenuList">
        <NuxtLink
            activeClass="!bg-third-gradient !bg-clip-text !text-transparent"
            :to="menu.to"
            class="hover:bg-third-gradient hover:bg-clip-text hover:text-transparent lg:dark:text-white"
            :class="PinNav ? 'lg:text-base-title' : 'lg:text-gray-200'"
        >{{ menu.title }}
        </NuxtLink
        >
      </li>
    </ul>
    <!-- 关闭按钮 -->
    <div
        @click="handlerToggleMenu(false)"
        class="flex cursor-pointer absolute top-4 dark:text-white right-6 text-2xl text-base-title lg:hidden"
    >
      <Icon name="i-carbon-close"/>

    </div>
  </div>

  <!-- 切换按钮 -->
  <div
      @click="handlerToggleMenu(true)"
      :class="
      clsx(
        'flex cursor-pointer text-lg  dark:text-white transition-colors duration-500 lg:hidden',
        PinNav ? 'text-base-title' : 'text-white'
      )
    "
  >
    <Icon name="i-carbon-menu"/>
  </div>
</template>
