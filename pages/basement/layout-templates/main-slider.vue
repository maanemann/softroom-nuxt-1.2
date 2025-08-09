
<script setup lang="ts">

  // § TODO: fix denne malfunktionelle kode fra llm :

  import { ref, nextTick } from 'vue'

  const containerRef = ref<HTMLElement | null>(null)
  const currentIndex = ref(0)

  const goToNextSlide = async () => {
    // Find all slide elements
    const slides = containerRef.value?.children
    if (!slides || currentIndex.value >= slides.length - 1) return

    currentIndex.value++
    const nextSlide = slides[currentIndex.value] as HTMLElement
    if (nextSlide && containerRef.value) {
      // Smoothly scroll to the next slide's offset
      containerRef.value.scrollTo({
        left: nextSlide.offsetLeft,
        behavior: 'smooth',
      })
    }
  }
</script>

<template>
  <div>
    <!-- § TODO: omskriv værdier til (grid) variabler (i main.css) -->
    <!-- § TODO: `:disabled="currentIndex === 4"` skal gøres dynamisk somehow -->
    <button 
      type="button"
      class="
        absolute w-16 aspect-square 
        bottom-16 right-[calc(16rem-4rem)] 
        rounded-r-full p-2 bg-emerald-900
        cursor-pointer
      "
      :disabled="currentIndex === 4"
      @click="goToNextSlide"
    >
      ▸
    </button>
    <!-- § TODO: omskriv værdier til (grid) variabler (i main.css) -->
    <section
      ref="containerRef"
      aria-label="Main articles presented in an image carousel"
      class="
        flex gap-1
        w-fit h-screen overflow-x-auto
        snap-x snap-mandatory scroll-smooth
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

