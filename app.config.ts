
// § h1 : eksempel fra nuxt dokumentation (lidt modifiseret), lav det om.
  // § link : https://nuxt.com/docs/getting-started/configuration

export default defineAppConfig({
  title: 'softroom',
  theme: {
    dark: true,
    colors: {
      primary: '#000000'
    }
  }
})


// § h2 : "These variables are exposed to the rest of your application using the useAppConfig composable"

// <script setup lang="ts">
//   const appConfig = useAppConfig()
// </script>

