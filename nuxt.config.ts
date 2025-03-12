// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [[
    "@pinia/nuxt", {
      autoImports: ["defineStore", "acceptHMRUpdate"]
    }
  ], "@nuxt/image"],
  routeRules: {
    "/spa": { ssr: false },
    "/static": { static: true },
    "/swr": { swr: true },
    // no need to set for ssr as by default our site is universally rendered and serves everything from the server  
  },
  image: {
    domains: [
      "m.media-amazon.com",
    ]
  }
})