<template>
  <n-dropdown trigger="hover" :options="options">
    <div
      class="flex items-center gap-2 hover:bg-slate-100 transition-all hover:px-3 py-1 rounded-md cursor-pointer"
    >
      <n-avatar round />
      <div class="text-center text-sm">
        <h4>Admin</h4>
        <span>系统管理员</span>
      </div>
    </div>
  </n-dropdown>
</template>
<script setup lang="ts">
const options = [
  {
    label: "退出登录",
    key: "marina bay sands",
  },
];
</script>
