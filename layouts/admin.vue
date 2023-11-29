<template>
  <LayoutAdminHeader/>
  <div class="w-full grid layout-container grid-cols-12 relative grid-rows-1">
    <div class="col-span-2 relative hidden lg:block">
      <LayoutAdminSideBar/>
    </div>
    <main class="col-span-12 lg:col-span-10 overflow-x-hidden">
      <slot/>
    </main>
  </div>
</template>

