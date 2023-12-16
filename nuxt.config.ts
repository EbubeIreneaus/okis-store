// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/image', '@formkit/auto-animate/nuxt', 'nuxt-mdi'],
  image: {
    domains: ['fakestoreapi.com']
  },
  mdi:{
    cache: false,
    componentName: 'myIcon',
    defaultSize: '1em'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app:{
    pageTransition:{
      name: 'page', mode: 'out-in'
    },
    layoutTransition:{
      name: 'layout', mode: 'out-in'
    }
  },

  css:['~/assets/main.css', 'animate.css/animate.css','@fortawesome/fontawesome-free/css/all.min.css']
})
