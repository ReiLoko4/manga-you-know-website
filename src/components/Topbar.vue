<script lang="ts" setup>
  const links = [
    { label: "Home", to: "/", icon: "tabler:square-letter-m" },
    {
      to: "https://github.com/manga-you-know/desktop",
      target: "_blank",
      icon: "mdi:github-box",
    },
    {
      to: "https://discord.gg/FK37mJtFD4",
      target: "_blank",
      icon: "mdi:discord",
    },
  ];
</script>

<template>
  <div class="w-full my-12 flex items-center justify-between">
    <NuxtImg src="icon.png" class="h-20" />
    <UNavigationMenu class="w-96" color="neutral" highlight :items="links" />
  </div>
</template>
