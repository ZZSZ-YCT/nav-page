// https://nuxt.com/docs/api/configuration/nuxt-config
import { md3 } from 'vuetify/blueprints'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module','@element-plus/nuxt'],
  vuetify: {
    vuetifyOptions: {
      blueprint: md3
    }
  },
  elementPlus: { /** Options */ }
})
