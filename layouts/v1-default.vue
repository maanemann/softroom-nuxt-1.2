
<template>
  <div class="frame">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .frame {
    place-self: center;
    max-width: calc(var(--siz-full) * 3 / 2);
    width: 100vw;
    height: var(--siz-full);
    display: grid;
    place-items: center;
    background-color: var(--col-bg-frame);
  }

  .content {
    width: calc(100% - var(--siz-16spx));
    height: calc(100% - var(--siz-16spx));
    background-color: var(--col-bg-content);
  }
</style>

<style>
  :root {
    /* # VARIABLES */
    /* ## BASE VARIABLES */
    /* ### COLORS */
    --col-dustybrown: #4c4138;
    --col-dirtgray: #746658;
    --col-warmwood: #70503a;

    /* ### SIZES */
    /* § spx = "soft pixel" */
    --siz-1spx: .5vh;
    --siz-2spx: 1vh;
    --siz-4spx: 2vh;
    --siz-8spx: 4vh;
    --siz-16spx: 8vh;
    --siz-32spx: 16vh;
    --siz-64spx: 32vh;
    --siz-128spx: 64vh;
    --siz-full: 100vh;

    /* ## APPLIED VARIABLES */
    /* ### COLORS */
    --col-bg-body: var(--col-dustybrown);
    --col-bg-content: var(--col-dirtgray);
    --col-bg-frame: var(--col-warmwood);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 108ms ease-in;
  }

  body {
    font-size: 16px;
    background-color: var(--col-bg-body);
    overflow-x: hidden;
  }

#__nuxt {
  display: grid;
}
</style>

