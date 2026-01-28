import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // § static generate > aktiver denne linje :
  ssr: true,

  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  // læs: https://image.nuxt.com/ og https://fonts.nuxt.com/ 
  modules: [
    '@nuxt/eslint', '@nuxt/fonts', '@nuxt/image',
  ],

  css: ['~/assets/css/main.css'],

  vite: {plugins: [ tailwindcss() ]},

  // § ekstern stylesheet import eksempel :
  // app: {
  //   head: {
  //     link: [{ 
  //       rel: 'stylesheet', 
  //       href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' 
  //     }]
  //   }
  // },
})
