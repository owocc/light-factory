<script setup lang="ts">

const {menuList} =useAdminSidebarConfig()

</script>
<template>
  <n-menu
      :root-indent="36"
      :indent="12"
      :options="menuList"
  />
</template>
