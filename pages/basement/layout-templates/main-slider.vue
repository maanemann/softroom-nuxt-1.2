
<script setup lang="ts">

</script>

<template>
  <div>
    <button 
      type="button"
      class="
        absolute w-16 aspect-square 
        bottom-16 right-[calc(16rem-4rem)] 
        rounded-r-full p-2 bg-emerald-900"
    >
      ▸
    </button>
    <!-- § TODO: omskriv værdier til grid variabler (i main.css) -->
    <section
      aria-label="Main articles presented in an image carousel"
      class="
        flex gap-1
        w-fit h-screen overflow-x-auto
    ">
      <!-- § inject'ede(?) klasser herunder er+skal føjet til main.css > `@source inline()`, læs mere derinde.. -->
      <ArticleItem bgc="rose-300/40" />
      <ArticleItem bgc="pink-300/40" />
      <ArticleItem bgc="fuchsia-300/40" />
      <ArticleItem bgc="purple-300/40" />
      <!-- <div class="bg-rose-300/40 w-[calc(100vw-16rem)] h-full" />
      <div class="bg-pink-300/40 w-[80vw] h-full" />
      <div class="bg-fuchsia-300/40 w-[80vw] h-full" />
      <div class="bg-purple-300/40 w-[80vw] h-full" /> -->
    </section>
  </div>
</template>

<style lang="css" scoped>
</style>

