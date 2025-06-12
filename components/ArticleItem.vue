
<script setup lang="ts">

const props = defineProps<{
  bgc?: string
}>()

  // console.log(props.title)
</script>


<template>

  <!-- § TODO: omskriv værdier til grid variabler (i main.css) -->  
  <figure
    :class="`
      bg-${props.bgc}
      w-[calc(100vw-16rem)] h-full
    `"/>
    <!-- :style="{ backgroundColor: props.bgc }" -->
    <!-- class="bg-rose-300/40 w-[calc(100vw-16rem)] h-full" -->

</template>

<style lang="css" scoped>

</style>