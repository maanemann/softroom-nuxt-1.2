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
              <li> <a href="/basement/v1/colors"> colors </a> </li>
              <li> <a href="/basement/v1/clip"> clip </a> </li>
            </ul>
          </li>
          <li> ... </li>
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
