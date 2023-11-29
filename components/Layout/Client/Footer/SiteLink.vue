<script setup lang="ts">
export interface SiteLink {
  href?: string
  to?: string
  label: string
}

interface SiteLinkProps {
  title?: string
  links?: SiteLink[]
}

const props = defineProps<SiteLinkProps>()
</script>

<template>
  <div>
    <h3 class="text-md font-medium mb-4">{{ props?.title }}</h3>
    <ul class="grid gap-y-3">
      <li v-for="link in props.links" class="text-gray-400">
        <NuxtLink v-if="link.to" :to="link?.to"/>
        <a v-else :href='link?.href' class="transition-colors text-sm hover:text-primary"
        >{{ link.label }}</a
        >
      </li>
    </ul>
  </div>
</template>
