<script setup lang="ts">
import { gsap } from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);
const showBG = inject<boolean>("PinNav");
</script>

<template>
  <div
    class="flex gap-x-4 lg:gap-x-6 items-center lg:border lg:py-2 lg:px-4 border-gray-300 rounded-full transition-all"
  >
    <UiStateIcon
      name="i-carbon-moon"
      name2="i-carbon-light"
      class="text-lg transition-all duration-300 dark:text-white ease-in-out cursor-pointer lg:text-xl hover:rotate-12 hover:text-primary"
      :class="showBG ? 'text-base-title' : 'text-white'"
    />
    <Icon
      name="i-carbon-shopping-cart"
      class="text-lg transition-all duration-300 dark:text-white ease-in-out cursor-pointer lg:text-xl hover:text-primary"
      :class="showBG ? 'text-base-title' : 'text-white'"
    />
  </div>
</template>
