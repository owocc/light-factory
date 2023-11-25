<script setup lang="ts">
</script>
<template>
  <n-layout has-sider class="h-screen w-screen">
    <n-layout-sider
      :width="220"
      bordered
      collapse-mode="width"
    >
      <LayoutAdminSideBar />
    </n-layout-sider>

    <article class="grid h-screen grid-rows-[3.5rem,1fr] grid-cols-1 w-full">
      <LayoutAdminHeader />
      <main class="w-full flex-1 overflow-hidden flex flex-col h-full max-h-fit p-4 bg-slate-100">
        <div class="h-full flex-1 w-full border rounded-md bg-white overflow-hidden">
          <slot />
        </div>
      </main>
    </article>
  </n-layout>
</template>
