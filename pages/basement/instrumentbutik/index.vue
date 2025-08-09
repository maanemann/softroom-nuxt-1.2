<script setup lang="ts">

</script>

<template>
  <div 
    class="
      grid grid-flow-row grid-cols-1 
      p-2 gap-2 

      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4
    "
  >
    <store-item-card 
      v-for="i in 12" :key="i" 
    />
  </div>
</template>

<style lang="css" scoped>

</style>