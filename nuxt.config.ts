// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css:['~/assets/main.css', 'animate.css/animate.css','@fortawesome/fontawesome-free/css/all.min.css']
})
