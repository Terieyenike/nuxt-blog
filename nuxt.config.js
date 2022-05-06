export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Learn Programming as a Nomad",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: "A blog that explores the new norm of working from anywhere as long as internet is available. Work begins with you (freedom)"},
      {name: "format-detection", content: "telephone=no"},
    ],
    link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
      {
        rel: "preconnect", href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect", href: "https://fonts.gstatic.com"
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap",
        rel: "stylesheet"
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content"],

  // Modules: https://content.nuxtjs.org/
  content: {
    // nuxt content options
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
