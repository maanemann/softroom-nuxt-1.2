
<!-- 
§ h1 : "Build UIs that don't suck" – #1, "Rounding corners with science and CSS variables"
§ h2 : video

§ https://www.youtube.com/watch?v=X3-4jwm4Z4Y


§ h2 : kode (kilde til dette)

§ https://play.tailwindcss.com/SIHJT7S215


§ h2 : beskrivelse

Nested'e elementer med border-radius får ulige spacing i 'svinget', hvis værdien er den samme

Bonus : Man kan deklarere variabler med tw direkte i class attributen med `[--key:value]` !!

§ h3 : løsning:
border-radius for child-elementet skal være parent border-radius minus padding (afstanden mellem de to elementer)

§ h4 : l. ca. 29-30, isoleret til essens
<div class="rounded-(--card-radius) bg-white/15 p-(--card-padding) [--card-padding:--spacing(3)] [--card-radius:var(--radius-4xl)]">
        <img class="rounded-[calc(var(--card-radius)-var(--card-padding))] src="" alt="" />


§ h2 : hele koden fra course
-->

<template>
  <div class="bg-gray-950 px-8 py-16">
    <div class="mx-auto flex max-w-md flex-col gap-y-10">
      <div class="rounded-(--card-radius) bg-white/15 p-(--card-padding) outline -outline-offset-1 outline-white/25 [--card-padding:--spacing(3)] [--card-radius:var(--radius-4xl)]">
        <img class="aspect-5/6 rounded-[calc(var(--card-radius)-var(--card-padding))] bg-gray-800 object-cover shadow-2xl outline -outline-offset-1 outline-white/10" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />
      </div>
      <figure class="relative isolate pt-6">
        <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" class="absolute top-0 left-0 -z-10 h-32 stroke-white/20">
          <path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z" />
          <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86" />
        </svg>
        <blockquote class="text-xl/8 font-semibold text-white">
          <p>Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.</p>
        </blockquote>
        <figcaption class="mt-8 text-base">
          <div class="font-semibold text-white">Judith Black</div>
          <div class="mt-1 text-gray-400">CEO of Workcation</div>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

