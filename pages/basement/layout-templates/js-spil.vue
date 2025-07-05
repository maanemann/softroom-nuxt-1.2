<template>
  <div class="relative w-[320px] h-[256px] bg-gray-200 overflow-hidden">
    <!-- Render tiles -->
    <div v-for="(row, r) in tileMap" :key="r">
      <div
        v-for="(cell, c) in row" 
        :key="c"
        v-if="cell === 1"
        class="absolute w-8 h-8 bg-gray-800"
        :style="{ top: `${r*32}px`, left: `${c*32}px` }"
      >
      </div>
    </div>
    <!-- Player -->
    <div
      class="absolute w-6 h-6 bg-blue-500"
      :style="{ transform: `translate(${playerX}px, ${playerY}px)` }"
    >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Example tile map: 0 = empty, 1 = ground block
const tileMap = ref<number[][]>([
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1]
]);

// Player state
const playerX = ref(16);   // horizontal position (px)
const playerY = ref(0);    // vertical position (px)
const velX = ref(0);
const velY = ref(0);

const gravity = 0.5;
const speed = 2;
const jumpStrength = 8;

// Simple collision: check if below player is solid
function isOnGround() {
  const px = playerX.value + 3;             // roughly center of player (w=24)
  const py = playerY.value + 6 + 1;         // bottom of player (h=24) + 1px
  const col = Math.floor(px / 32);
  const row = Math.floor(py / 32);
  return tileMap.value[row] && tileMap.value[row][col] === 1;
}

// Handle key events
function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft')  velX.value = -speed;
  if (e.key === 'ArrowRight') velX.value = speed;
  if (e.key === 'ArrowUp' && isOnGround()) velY.value = -jumpStrength;
}
function onKeyUp(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') velX.value = 0;
}

// Main game loop
function update() {
  // Horizontal movement
  playerX.value += velX.value;

  // Vertical movement with gravity
  velY.value += gravity;
  playerY.value += velY.value;

  // Ground collision: if falling onto ground, snap to tile
  if (isOnGround() && velY.value > 0) {
    const groundRow = Math.floor((playerY.value + 6) / 32);
    playerY.value = groundRow * 32 - 6; // align bottom
    velY.value = 0;
  }
}

function loop() {
  update();
  requestAnimationFrame(loop);
}

// Set up event listeners and start loop
onMounted(() => {
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  requestAnimationFrame(loop);
});
</script>
