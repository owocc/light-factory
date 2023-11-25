<script setup lang="ts">
import {gsap} from 'gsap'
import Flip from 'gsap/Flip'

gsap.registerPlugin(Flip)
const showBG = inject<boolean>('PinNav')
</script>

<template>
  <div class="flex gap-x-4 lg:gap-x-6 items-center">
    <!--    <Icon name="i-carbon-light"-->
    <!--          class=" text-lg transition-all duration-500 ease-in-out cursor-pointer lg:text-2xl  hover:rotate-45"-->
    <!--          :class="showBG ? 'text-base-title' : 'text-white'"/>-->
    <UiStateIcon name="i-carbon-moon" name2="i-carbon-light"
                 class=" text-lg transition-all duration-300 dark:text-white ease-in-out cursor-pointer lg:text-2xl  hover:rotate-12"
                 :class="showBG ? 'text-base-title' : 'text-white'"/>
  </div>
</template>
