import Vue from 'vue'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: process.env.GOOGLE_ANALYTICS_ID || 'G-EQZDVLGRHD' }
  // config: { id: process.env.GOOGLE_ANALYTICS_ID || 'UA-213194647-1' }
})

// https://www.elian.codes/blog/add-custom-tracking-events-to-your-nuxt-site-with-GA4