<script setup lang="ts">
</script>


<template>
  <div class="frame">
    <slot />
  </div>
</template>

<style>
  body {
    background-color: darksalmon;
  }
</style>

<style lang="css" scoped>
  /* § clip init-state: */
  .frame {
    width: 100vw; height: 100vh;
    clip-path: polygon(
      1rem 20%, 
      20% 3rem,
      20% 1rem,
      calc(100% - 1rem) 1rem, 
      calc(100% - 1rem) 80%,
      80% calc(100% - 3rem),
      80% calc(100% - 1rem), 
      1rem calc(100% - 1rem)
    );
    
    /* § clip end-state: */
    /* clip-path: polygon(
      1rem 1rem,
      calc(100% - 1rem) 1rem,
      calc(100% - 1rem) calc(100% - 1rem),
      1rem calc(100% - 1rem)
    ); */
    background-color: antiquewhite;
  }

  /* § fun clip-path : */
  /* 
    clip-path: polygon(
      1rem 20%, 
      20% 3rem,
      20% 1rem,
      calc(100% - 1rem) 1rem, 
      calc(100% - 1rem) 80%,
      80% calc(100% - 1rem), 
      80% 20%,
      1rem calc(100% - 1rem)
    );
  */
</style>