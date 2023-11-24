<script setup>
import clsx from 'clsx'
import {gsap} from 'gsap'
import {Observer} from 'gsap/Observer'

gsap.registerPlugin(Observer)
const showBG = ref(false)
provide('PinNav', showBG)
onMounted(() => {
  Observer.create({
    target: window,
    type: 'scroll',
    onChangeY(e) {
      showBG.value = e.scrollY() > 50
    },
  })
})
</script>

<template>
  <header
      :class="
      clsx(
        'w-full sticky top-0 left-0 nav z-50 transition-colors px-6',
        showBG ? 'bg-base-body shadow-md' : 'bg-base-dark'
      )
    "
  >
    <nav class="max-w-7xl mx-auto h-full flex justify-between items-center">
      <CommonLogo/>
      <div class="flex items-center gap-x-4 lg:gap-x-16">
        <LayoutClientHeaderMenuList/>
        <Icon name="i-carbon-light" class=" text-lg transition-colors duration-500 lg:text-xl"
              :class="showBG ? 'text-base-title' : 'text-white'"/>
      </div>
    </nav>
  </header>
</template>
