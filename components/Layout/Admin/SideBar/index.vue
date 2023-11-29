<script setup lang="ts">
const {$clsx} = useNuxtApp()
const {tailwindBorderStyle,tailwindStickyLeftTopStyle,tailwindBGStyle} = useTailwindcssConfig()

// ------- 主题样式配置 --------------------
const sideBarClasses = computed(()=>$clsx(
  'w-full h-full',
  'border-r',
  tailwindBorderStyle,
  tailwindStickyLeftTopStyle,
  tailwindBGStyle
))
// -------- 菜单配置读取 -------------------
const { menuList } = useAdminSidebarConfig()
</script>

<template>
  <aside
    :class="sideBarClasses">
    <div class="h-full px-3 py-4 overflow-y-auto ">
      <ul class="space-y-2 font-medium">
        <LayoutAdminSideBarItem 
        v-for="menu in menuList"
        v-bind="menu"
        :key="menu.key" />
      </ul>
    </div>
  </aside>
</template>
