
<!--
§ h1 : "Build UIs that don't suck" – #0

§ h2 : video

§ https://www.youtube.com/watch?v=-h9rH539x1k


§ h2 : kode (kilde til dette)

§ https://play.tailwindcss.com/P4CmmkDXaB


§ h2 : beskrivelse

Løs problemet med at screen readers læser alt indholdet i links, og hvis linket er et 'kort', el.l, hvor en længere tekst skal kunne klikkes på, bliver det svært at orientere sig på hjemmesiden med screen reader.

§ h3 : løsning:
<div class="relative isolate">
  <h2>...</h2>
    <a href="#">
      <span class="absolute inset-0 z-10">
        \<\!-- ingen ting her! --\>
      </span>
    </a>
</div>


§ h2 : hele koden fra course
-->

<script setup lang="ts">

</script>

<template>
  <div class="flex w-full">
      <div class="fixed inset-0 flex justify-center sm:px-8">
        <div class="flex w-full max-w-7xl"><div class="w-full bg-white ring-1 ring-zinc-100"></div></div>
      </div>
      <div class="relative flex w-full flex-col">
        <header class="pointer-events-none relative z-50 flex flex-none flex-col" style="height: var(--header-height); margin-bottom: var(--header-mb)">
          <div class="top-0 z-10 h-16 pt-6" style="position: var(--header-position)">
            <div class="top-(--header-top,--spacing(6)) w-full sm:px-8" style="position: var(--header-inner-position)">
              <div class="mx-auto w-full max-w-7xl">
                <div class="relative px-8">
                  <div class="mx-auto max-w-2xl">
                    <div class="relative flex gap-4">
                      <div class="flex flex-1">
                        <div class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm">
                          <a aria-label="Home" class="pointer-events-auto" href="/"
                            ><img alt="" fetchpriority="high" width="512" height="512" decoding="async" data-nimg="1" class="size-9 rounded-full bg-zinc-100 object-cover" src="https://assets.tailwindcss.com/course-demos/avatar.webp"
                          /></a>
                        </div>
                      </div>
                      <div class="flex justify-end md:flex-1">
                        <div class="pointer-events-auto">
                          <button type="button" aria-label="Switch to dark theme" class="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition">
                            <svg
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              aria-hidden="true"
                              class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700"
                            >
                              <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                              <path d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061" fill="none"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main class="flex-auto">
          <div class="mt-16 sm:mt-32 sm:px-8">
            <div class="mx-auto w-full max-w-7xl">
              <div class="relative px-8">
                <div class="mx-auto max-w-2xl">
                  <header class="max-w-2xl">
                    <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">Writing on software design, company building, and the aerospace industry.</h1>
                    <p class="mt-6 text-base text-zinc-600">All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.</p>
                  </header>
                  <div class="mt-16">
                    <div class="md:border-l md:border-zinc-100 md:pl-6">
                      <div class="-mx-4 flex max-w-3xl flex-col space-y-4 md:mx-0">
                        <article class="md:grid md:grid-cols-4 md:items-baseline">
                          <div class="relative isolate flex flex-col items-start rounded-2xl px-4 py-6 hover:bg-zinc-200/70 md:col-span-3">
                            <h2 class="text-base font-semibold tracking-tight text-zinc-800">
                              <a href="#">
                                <span class="absolute inset-0 z-10"></span>
                                Crafting a design system for a multiplanetary future
                              </a>
                            </h2>
                            <time class="relative order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 md:hidden" datetime="2022-09-05">
                              <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true"><span class="h-4 w-0.5 rounded-full bg-zinc-200"></span></span>
                              September 5, 2022
                            </time>
                            <p class="mt-2 text-sm text-zinc-600">
                              Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our
                              entire solar system.
                            </p>
                            <div aria-hidden="true" class="mt-4 flex items-center text-sm font-medium text-teal-500">Read article &rarr;</div>
                          </div>
                          <time class="order-first hidden text-sm text-zinc-400 md:block" datetime="2022-09-05">September 5, 2022</time>
                        </article>

                        <article class="md:grid md:grid-cols-4 md:items-baseline">
                          <a href="#" class="flex flex-col items-start rounded-2xl px-4 py-6 hover:bg-zinc-200/70 md:col-span-3">
                            <h2 class="text-base font-semibold tracking-tight text-zinc-800">Introducing Animaginary: High performance web animations</h2>
                            <time class="relative order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 md:hidden" datetime="2022-09-02">
                              <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true"><span class="h-4 w-0.5 rounded-full bg-zinc-200"></span></span>
                              September 2, 2022
                            </time>
                            <p class="mt-2 text-sm text-zinc-600">
                              When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.
                            </p>
                            <div aria-hidden="true" class="mt-4 flex items-center text-sm font-medium text-teal-500">Read article &rarr;</div>
                          </a>
                          <time class="order-first hidden text-sm text-zinc-400 md:block" datetime="2022-09-02">September 2, 2022</time>
                        </article>

                        <article class="md:grid md:grid-cols-4 md:items-baseline">
                          <a href="#" class="flex flex-col items-start rounded-2xl px-4 py-6 hover:bg-zinc-200/70 md:col-span-3">
                            <h2 class="text-base font-semibold tracking-tight text-zinc-800">Rewriting the cosmOS kernel in Rust</h2>
                            <time class="relative order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 md:hidden" datetime="2022-07-14">
                              <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true"><span class="h-4 w-0.5 rounded-full bg-zinc-200"></span></span>
                              July 14, 2022
                            </time>
                            <p class="mt-2 text-sm text-zinc-600">
                              When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an article on the front page of Hacker News about
                              rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.
                            </p>
                            <div aria-hidden="true" class="mt-4 flex items-center text-sm font-medium text-teal-500">Read article &rarr;</div>
                          </a>
                          <time class="order-first hidden text-sm text-zinc-400 md:block" datetime="2022-07-14">July 14, 2022</time>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer class="mt-20 flex-none">
          <div class="sm:px-8">
            <div class="mx-auto w-full max-w-7xl">
              <div class="border-t border-zinc-100 pt-10 pb-16">
                <div class="relative px-4 sm:px-8">
                  <div class="mx-auto max-w-2xl">
                    <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
                      <div class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800">
                        <a class="transition hover:text-teal-500" href="#">About</a><a class="transition hover:text-teal-500" href="#">Projects</a><a class="transition hover:text-teal-500" href="#">Speaking</a
                        ><a class="transition hover:text-teal-500" href="#">Uses</a>
                      </div>
                      <p class="text-sm text-zinc-400">© 2025 Spencer Sharp. All rights reserved.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
</template>

<style lang="css" scoped>

</style>