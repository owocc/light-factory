<script setup>

import clsx from 'clsx'

const PinNav = inject('PinNav')
</script>

<template>
  <a
      href="#"
      :class="
      clsx(
        'font-medium duration-500 flex items-center lg:text-xl transition-all',
        PinNav ? 'text-base-title' : 'text-white '
      )
    "
  >
    <span class="bg-third-gradient text-transparent bg-clip-text">星光</span
    >灯坊
  </a>
</template>
