<script setup>
const menuStatus = ref(false);
const handlerSwitchMenu = () => {
  menuStatus.value = !menuStatus.value;
};
</script>
<template>
  <LayoutAdminHeader @switch-menu="handlerSwitchMenu" />
  <div
    class="w-full grid layout-container lg:grid-cols-12 relative grid-rows-1"
  >
    <div class="lg:col-span-2 relative">
      <LayoutAdminSideBar :visible="menuStatus" />
    </div>
    <main class="lg:col-span-10 overflow-x-hidden">
      <slot />
    </main>
  </div>
</template>
