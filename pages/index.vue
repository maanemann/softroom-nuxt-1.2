<script setup lang="ts">
</script>

<template> <div>

  <ItemWrap>
    <TestTest />
  </ItemWrap>

  <ItemWrap>
    <ul class="pr-6 py-8 [&_li]:pl-6">
      <li> basement
        <ul>
          <li><a href="/basement/v1">v1</a>
            <ul>
              <li><a href="/basement/v1/colors">colors</a></li>
              <li><a href="/basement/v1/clip">clip</a></li>
            </ul>
          </li>
          <li><a href="/basement/netninja-nuxt-tut">netninja-nuxt-tut</a>
            <ul>
              <li><a href="/basement/netninja-nuxt-tut/about">about</a></li>
              <li><a href="/basement/netninja-nuxt-tut/products">products</a></li>
            </ul>
          </li>
          <li>layout-templates
            <ul>
              <li><a href="/basement/layout-templates/main-slider">main-slider</a></li>
              <li><a href="/basement/layout-templates/tight-frame-frame">tight-frame-frame</a></li>
            </ul>
          </li>
          <li> build-uis-that-dont-suck
            <ul class="[&_li]:inline">
              <li><a href="/basement/build-uis-that-dont-suck/0">0</a></li>
              <li><a href="/basement/build-uis-that-dont-suck/1">1</a></li>
              <li><a href="/basement/build-uis-that-dont-suck/2">2</a></li>
              <li><a href="/basement/build-uis-that-dont-suck/3">3</a></li>
              <li><a href="/basement/build-uis-that-dont-suck/4">4</a></li>
              <li><a href="/basement/build-uis-that-dont-suck/5">5</a></li>
              <li><a href="/basement/build-uis-that-dont-suck/x">6</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </ItemWrap>

  <ItemWrap>
    <!-- TODO: brug Image component ... -->
    <img src="~/public/img/hej.jpg" alt="hej">
  </ItemWrap>

  <!-- <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div> -->

</div> </template>
