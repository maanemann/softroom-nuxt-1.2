
<template>
  <div class="everything">
    <!-- Root wrapper to track mouse for tooltip -->
    <div class="grid-root" @mousemove="updateTooltipPosition">
      <!-- Grid container with transition-group for animated reordering -->
      <div ref="grid" class="grid-container">
        <!-- Each color box square as grid item -->
        <transition-group
          v-for="color in sortedColors"
          :key="color"
          :style="{ backgroundColor: color }"
          name="reorder" tag="div"
          class="color-box"
          @click="handleColorClick(color)"
          @mouseenter="showTooltip(color)"
          @mouseleave="hideTooltip"
        />
      </div>

      <!-- Tooltip that follows cursor -->
      <div
        v-if="tooltip.visible"
        class="tooltip"
        :style="{ top: tooltip.y + 'px', left: tooltip.x + 'px' }"
      >
        {{ tooltip.text }}
      </div>
    </div>

    <!-- Footer bar with controls and notification -->
    <div class="footer-bar">
      <span class="footer-text">pick a color!</span>
      <span class="footer-text">sort colors by...</span>
      <button
        v-for="method in sortMethods"
        :key="method"
        :class="['sort-button', { active: currentSort === method }]"
        @click="setSort(method)"
      >
        {{ method }}
      </button>
      <span v-if="notification" class="notification">
        {{ notification }}
      </span>
    </div>
  </div>
</template>


<script setup>
  import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'

  // Caching constants
  const CACHE_KEY = 'css-color-names'
  const CACHE_TS_KEY = 'css-color-names-ts'
  const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24h

  // Reactive state
  const rawColors = ref([])          // fetched list of { name, hex }
  const currentSort = ref('hue')    // active sort method
  const notification = ref('')      // copy feedback text
  const tooltip = ref({ visible: false, text: '', x: 0, y: 0 })
  const grid = ref(null)            // DOM ref for grid container
  const randomTrigger = ref(0)     // Reactive trigger for random sorting

  // Sorting methods
  const sortMethods = ['hue', 'saturation', 'lightness', 'name', 'random'];

  // Utility: hex to HSL
  function hexToHSL(hex) {
    const r = parseInt(hex.substr(1,2),16)/255
    const g = parseInt(hex.substr(3,2),16)/255
    const b = parseInt(hex.substr(5,2),16)/255
    const max = Math.max(r,g,b), min = Math.min(r,g,b)
    let h=0, s=0, l=(max+min)/2
    if(max!==min){
      const d=max-min
      s=l>0.5?d/(2-max-min):d/(max+min)
      if(max===r) h=((g-b)/d + (g<b?6:0))
      else if(max===g) h=(b-r)/d+2
      else h=(r-g)/d+4
      h/=6
    }
    return { h, s, l }
  }

  // Filter duplicate gray/grey
  function filterGrayDuplicates(dataMap) {
    const seen = new Set(), result = {}
    for (const [name, hex] of Object.entries(dataMap)) {
      const norm = name.replace(/gray|grey/, '_gray')
      if (seen.has(norm)) continue
      const alt = name.replace(/gray$/, 'grey')
      const pick = name.includes('grey')
        ? name
        : dataMap[alt]
          ? alt
          : name
      result[pick] = dataMap[pick]
      seen.add(norm)
    }
    return result
  }

  // Computed sorted names
  const sortedColors = computed(() => {
    const arr = rawColors.value.map(c => ({ name: c.name, ...hexToHSL(c.hex) }));
    if (currentSort.value === 'name') {
      arr.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort.value === 'random') {
      randomTrigger.value; // Access the trigger to force re-evaluation
      arr.sort(() => Math.random() - 0.5); // Randomize the array
    } else {
      const key = currentSort.value.charAt(0);
      arr.sort((a, b) => a[key] - b[key]);
    }
    return arr.map(c => c.name);
  });

  // Update grid template
  async function updateGrid() {
    await nextTick()
    if (!grid.value) return
    const count = sortedColors.value.length
    const w = window.innerWidth
    const h = window.innerHeight - 40
    const cols = Math.floor(Math.sqrt((count*w)/h))||1
    const rows = Math.ceil(count/cols)
    grid.value.style.gridTemplateColumns = `repeat(${cols},1fr)`
    grid.value.style.gridTemplateRows = `repeat(${rows},1fr)`
  }

  // Fetch and cache
  async function fetchAndCache() {
    const res = await fetch('https://unpkg.com/css-color-names@1.0.1/css-color-names.json')
    const data = await res.json()
    localStorage.setItem(CACHE_KEY,JSON.stringify(data))
    localStorage.setItem(CACHE_TS_KEY,String(Date.now()))
    return data
  }

  async function loadColors() {
    const ts = parseInt(localStorage.getItem(CACHE_TS_KEY)||'0',10)
    const data = (Date.now()-ts<CACHE_DURATION)
      ? JSON.parse(localStorage.getItem(CACHE_KEY)||'{}')
      : await fetchAndCache()
    rawColors.value = Object.entries(filterGrayDuplicates(data))
      .map(([name, hex])=>({name,hex}))
  }

  // Copy & notify
  async function handleColorClick(color) {
    await navigator.clipboard.writeText(color)
    notification.value = `${color} copied!`
    setTimeout(()=>notification.value='',3000)
  }

  // Tooltip
  function showTooltip(color) { tooltip.value={visible:true,text:color,x:tooltip.value.x,y:tooltip.value.y} }
  function hideTooltip() { tooltip.value.visible=false }
  function updateTooltipPosition(e) { tooltip.value.x=e.clientX+10; tooltip.value.y=e.clientY+10 }

  // Sort change
  function setSort(method) {
    if (method === 'random') {
      randomTrigger.value++; // Increment the trigger to refresh randomness
    }
    currentSort.value = method;
    localStorage.setItem('selectedSortMethod', method);
  }

  // Watchers
  watch(sortedColors, updateGrid)
  watch(currentSort, updateGrid)

  // Lifecycle
  onMounted(async()=>{ 
    const savedSortMethod = localStorage.getItem('selectedSortMethod');
    if (savedSortMethod && sortMethods.includes(savedSortMethod)) {
      currentSort.value = savedSortMethod; // Restore saved sort method
    } else {
      currentSort.value = 'lightness'; // Default to 'lightness' if no saved method found
    }
    await loadColors(); 
    updateGrid(); 
    window.addEventListener('resize',updateGrid) })
  onUnmounted(()=>{ window.removeEventListener('resize',updateGrid) })
</script>


<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>


<style scoped>
  /* Reset default margins/padding */

  * {
    transition: all 108ms ease-in;
  }

  /* html, body, #__nuxt { */
  .everything {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #2d2d2d;
  }

  /* Root wrapper: holds grid and tooltip */
  .grid-root {
    position: relative;
    width: 100vw;
    height: calc(100vh - 40px);
    overflow: hidden;
  }

  /* Grid container: CSS grid, filled by JS */
  .grid-container {
    display: grid;
    width: 100%;
    height: 100%;
  }

  /* Each color box: a full cell item */
  .color-box {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  /* Tooltip styling */
  .tooltip {
    position: fixed;
    pointer-events: none;
    background-color: #2d2d2d;
    color: #e0e0e0;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.9rem;
    z-index: 1000;
  }

  /* Footer bar: control panel */
  .footer-bar {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  .footer-text {
    color: #ccc;
    margin-right: 12px;
    font-size: 0.9rem;
  }
  .sort-button {
    background-color: #444;
    color: #eee;
    border: none;
    padding: 4px 8px;
    margin-right: 8px;
    cursor: pointer;
  }
  .sort-button.active {
    background-color: #666;
  }
  .notification {
    margin-left: auto;
    color: #aaa;
    font-size: 0.9rem;
    transition: opacity 0.3s ease-in-out;
  }

  /* Transition for reorder animations */
  .reorder-move {
    transition: all 0.3s ease-in-out;
  }
</style>

