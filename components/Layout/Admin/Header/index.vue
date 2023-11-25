<template>
  <header class="h-full w-full">
    <nav class="h-full flex items-center border-b px-6 justify-between">
      <!--  导航栏左侧信息 -->
      <div>
        <h2 class="hover:p-2 origin-top hover:bg-slate-100 duration-300 cursor-pointer rounded-md">{{
            $route.meta.title
          }}</h2>
      </div>

      <div>
        <LayoutAdminHeaderUserActions/>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">

</script>
