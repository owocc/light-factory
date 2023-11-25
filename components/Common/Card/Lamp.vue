<script setup lang="ts">
import clsx from 'clsx'

interface LampProps {
  lampImage?: string
  alt?: string
  theme?: 'first' | 'second' | 'third'
  direction?: 'center' | 'left' | 'right'
}

const props = withDefaults(defineProps<LampProps>(), {
  lampImage: '/img/join-lamp.png',
  theme: 'second',
  direction: 'center'
})

const cardClasses = computed(() => clsx(
    // 通用样式
    'border-[6px]  border-transparent rounded-t-full  lg:border-8 lg:w-[450px] lg:h-[580px]',
    //不同主题的样式
    props.theme === 'second' && 'card-second-gradient',
    props.theme === 'first' ? 'card-first-gradient h-72 w-52' : 'w-52 h-80 ',
))

const cardTextClasses = computed(() => clsx(
    'text-5xl text-white text-center font-medium text-opacity-30 tracking-[0.5rem] lg:text-8xl',
    props.theme === 'first' && 'lg:mt-8 h-72'
))
</script>
<template>
  <div
      class="relative justify-self-center z-20 "
  >
    <div
        :class="cardClasses"
    >
      <img
          :src="props.lampImage"
          :alt="props.alt"
          class="relative justify-self-center block w-40 mx-auto translate-y-[-6px] z-20 lg:w-[380px] lg:-translate-y-[8px]"
      />
      <h1
          :class="cardTextClasses"
      >
        LIGHT
      </h1>
    </div>
    <!-- shadow -->
    <div
        class="bg-primary absolute bg-opacity-60 w-44 h-8 blur-md -bottom-3 -z-10 inset-x-0 mx-auto lg:w-[352px]"
    >
    </div>
  </div>
</template>
<style scoped>
.card-second-gradient {
  background: var(--second-gradient) padding-box,
  var(--second-gradient-alt) border-box;
}

.card-first-gradient {
  background: var(--first-gradient) padding-box,
  var(--first-gradient-alt) border-box;
}
</style>
