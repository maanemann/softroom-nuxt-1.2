<template>
  <div class="netninja">
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/basement/netninja-nuxt-tut/" class="font-bold">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/basement/netninja-nuxt-tut/">Home</NuxtLink></li>
          <li><NuxtLink to="/basement/netninja-nuxt-tut/about">About</NuxtLink></li>
          <li><NuxtLink to="/basement/netninja-nuxt-tut/products" class="btn">Merch</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>