
export default {
  ssr: false,

  target: "static",

  head: {
    titleTemplate: "%s - vuex-ts",
    title: "vuex-ts",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: [],

  plugins: [{ src: "~/plugins/counter", ssr: false }],

  components: true,

  buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify", "nuxt-typed-vuex"],

  modules: [],

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
    },
  },

  build: {},

  generate: {
    dir: "docs"
  }
};
