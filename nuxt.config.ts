// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxtjs/supabase',
  ],
  supabase: {
    redirect: false
  },
  devtools: { enabled: true }
})
