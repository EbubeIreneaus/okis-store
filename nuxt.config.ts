// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/image'],
  image: {
    domains: ['fakestoreapi.com']
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app:{
    pageTransition:{
      name: 'slide',
      mode:'out-in'
    },

    layoutTransition:{
      name: 'silde',
      mode: 'out-in'
    }
  },

  css:['~/assets/main.css', 'animate.css/animate.css','@fortawesome/fontawesome-free/css/all.min.css']
})
