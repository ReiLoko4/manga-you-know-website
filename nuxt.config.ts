// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  routeRules: {
    // prerender index route by default
    "/": { prerender: true },
  },
  css: ["@/css/app.css"],
  modules: ["@nuxt/ui", "@nuxt/image"],
  compatibilityDate: "2024-10-13",
});
