<script setup>
import { gsap } from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);
const showBG = inject("PinNav");

// FIXME 抽取和修复颜色模式
const colorMode = useColorMode();
const colorModeValue = ref(false);

onMounted(() => {
  if (colorMode.value === "dark") {
    colorModeValue.value = true;
  }
});

const switchColorMode = () => {
  colorModeValue.value = !colorModeValue.value;
  if (colorModeValue.value) {
    localStorage.setItem("nuxt-color-mode", "dark");
    colorMode.value = "dark";
  } else {
    localStorage.setItem("nuxt-color-mode", "light");
    colorMode.value = "light";
  }
};
</script>

<template>
  <div
    class="flex gap-x-4 lg:gap-x-6 items-center lg:border lg:py-2 lg:px-4 border-gray-300 rounded-full transition-all hover:bg-black/5 dark:hover:bg-white/5"
  >
    <UiStateIcon
      :state="colorModeValue"
      @switch="switchColorMode"
      name="i-carbon-moon"
      name2="i-carbon-light"
      class="text-lg transition-all duration-300 dark:text-white ease-in-out cursor-pointer lg:text-xl hover:rotate-12 hover:text-primary dark:hover:text-primary"
      :class="showBG ? 'text-base-title' : 'text-white'"
    />
    <Icon
      @click="$router.push('/cart')"
      name="i-carbon-shopping-cart"
      class="text-lg transition-all duration-300 dark:text-white ease-in-out cursor-pointer lg:text-xl hover:text-primary dark:hover:text-primary"
      :class="showBG ? 'text-base-title' : 'text-white'"
    />
  </div>
</template>
