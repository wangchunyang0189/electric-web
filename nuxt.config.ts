// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    // head
    head: {
      title: "广元市旺盛机电维修厂",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "广元市旺盛机电，机电维修出租，变压器维修出租，工厂控制线路安装",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/dianji.ico" }],
    },
  },

  // css
  css: ["~/assets/scss/index.scss"],

  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@element-plus/nuxt",
    "@nuxtjs/color-mode",
  ],
  plugins: [{ src: "~/plugins/swiper.client.js", mode: "client" }],

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // colorMode
  colorMode: {
    classSuffix: "",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },
  elementPlus: {
    icon: "ElIcon",
    importStyle: "scss",
    themes: ["dark"],
  },
});
