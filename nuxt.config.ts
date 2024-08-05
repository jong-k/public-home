// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 아래가 기본값
  // app: {
  //   head: {
  //     charset: "utf-8",
  //     viewport: "width=device-width, initial-scale=1",
  //   },
  // },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/content"
  ],
  colorMode: {
    classSuffix: "",
  },
});