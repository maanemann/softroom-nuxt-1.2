
<script setup lang="ts">
  const color = useColor() 
</script>

<!-- § "If you only have a single layout in your application, we recommend using app.vue with <NuxtPage /> instead." -->
  <!-- § https://nuxt.com/docs/getting-started/views#layouts -->

<template>
  <div>
    <NuxtLayout>

      <!-- § TODO: kan statiske og dynamiske klasselister kombineres ? : -->
      <p :class="color" class="ml-25">Current color: {{ color }}</p>

      <NuxtPage />

    </NuxtLayout>
  </div>
</template>