
<script setup lang="ts">
  const color = useColor() 
</script>

<template>
  <div>

    <p
      class="
        absolute top-0 left-0
        px-2 py-0.5
        text-emerald-600 bg-teal-950
        rounded-br-xl
    ">

      layoutttt

    </p>

    <!-- § TODO: kan statiske og dynamiske klasselister kombineres ? : -->
    <!-- <p :class="color" class="ml-25">Current color: {{ color }}</p> -->

    <slot />

  </div>
</template>