const pkg = require('./package')

module.exports = {
  mode: 'spa',

  generate: {
    fallback: true,
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'YU-GI-OH! Damage Counter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', sizes: "any", href: '/favicon.svg' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],

  manifest: {
    name: 'YGO Calc',
    lang: 'en',
    orientation: 'landscape',
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      return config;
    }
  },
  router: {
    base: process.env.NODE_ENV === 'development' ? '/' : '/yugioh-damage-counter-web/'
  }
}
