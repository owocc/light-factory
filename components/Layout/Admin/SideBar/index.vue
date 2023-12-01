<script setup>
const { $clsx } = useNuxtApp();
const {
  tailwindBorderStyle,
  tailwindStickyLeftTopStyle,
  tailwindBGStyle,
  tailwindStickyTopStyle,
} = useTailwindcssConfig();

// ------- 主题样式配置 --------------------
const sideBarClasses = computed(() =>
  $clsx(
    "w-full h-full",
    "border-r",
    tailwindBorderStyle,
    tailwindStickyLeftTopStyle,
    tailwindBGStyle
  )
);
// -------- 菜单配置读取 -------------------
const { menuList } = useAdminSidebarConfig();

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <aside :class="sideBarClasses">
    <div
      class="h-screen w-screen left-0 px-3 py-4 overflow-y-auto transition-all duration-300 fixed  -top-full lg:relative lg:!top-0 lg:h-full lg:w-full"
      :class="$clsx(tailwindBGStyle, props.visible && tailwindStickyTopStyle)"
    >
      <ul class="space-y-2 font-medium">
        <LayoutAdminSideBarItem
          v-for="menu in menuList"
          v-bind="menu"
          :key="menu.key"
        />
      </ul>
    </div>
  </aside>
</template>
