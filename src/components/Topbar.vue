<script lang="ts" setup>
  const links = [
    { name: 'Home', to: '/', icon: 'tabler:square-letter-m' },
    { name: 'About', to: '/about', icon: 'heroicons-outline:information-circle' },
    { name: 'Contact', to: '/contact', icon: 'mdi:github-box' },
    { name: 'Register', to: '/register' },
  ]
</script>

<template>
  <div>
    <UHorizontalNavigation 
      :links="links"
      class="w-full flex justify-end"
    >
      <template #default="{ link }">
        <span class="group-hover:text-primary relative">{{ link.name }}</span>
      </template>
    </UHorizontalNavigation>
  </div>
</template>
