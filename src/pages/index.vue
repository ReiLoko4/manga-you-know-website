<script lang="ts" setup></script>

<template>
  <div class="w-full flex flex-col items-center justify-center gap-8">
    <h1
      class="text-6xl font-serif hover:text-red-500 transition-all hover:scale-[1.20] duration-700 ease-in-out select-none"
    >
      MangaYouKnow
    </h1>
    <p>
      Your favorite manga app to read and stay updated in different sources.
    </p>
    <UButton
      icon="i-lucide-download"
      size="xl"
      variant="outline"
      color="neutral"
      label="Download"
      to="https://github.com/manga-you-know/desktop/releases/latest/"
      target="_blank"
    />
    <iframe
      class="h-[37rem] w-[50rem] rounded-xl"
      autoplay
      :controls="false"
      src="https://github.com/user-attachments/assets/5ca8bb1d-dbb1-4c70-88a9-e218499113f9"
    />
  </div>
</template>
