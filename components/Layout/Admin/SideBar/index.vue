<script setup lang="ts">
const {menuList} = useAdminSidebarConfig()
</script>

<template>
  <aside
      class="sticky top-[calc(var(--header-height))] border-r left-0 z-40 w-full h-full max-h-[calc(100vh-var(--header-height))] dark:border-gray-700"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <LayoutAdminSideBarItem v-for="menu in menuList" :text="menu.text" :to="menu.to" :icon="menu.icon"
                                :key="menu.key"/>
      </ul>
    </div>
  </aside>
</template>
