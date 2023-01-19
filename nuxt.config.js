export default {
  // Target: https://go.nuxtjs.dev/config-target
//  target: 'server',
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Big Five Abidjan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description', name: 'description', content: 'Brand Content / Digital / Communication. Laissez votre empreinte. BIG FIVE Solutions est une agence de agence de communication intégrée qui aide ses clients à se différencier, grâce à des solutions créatives, technologiques, évolutives et sur-mesure.' },
      {
        hid: 'keywords', name: 'description', content: 'Digital Brand Content Communication publicité Marketing identité graphique Sites web Sites E-commerce Social média Formations Coaching SEO/SEA Architecture de marque Analyse des tendances Stratégie de marque. Logo/Identité graphique Campagnes Édition Packagings'},
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:title', property: 'og:title', content: 'Big Five Abidjan' },
      { hid: 'og:url', property: 'og:url', content: 'https://bigfiveabidjan.com' },
      { hid: 'og:description', property: 'og:description', content: 'Brand Content / Digital / Communication. Laissez votre empreinte. BIG FIVE Solutions est une agence de agence de communication intégrée qui aide ses clients à se différencier, grâce à des solutions créatives, technologiques, évolutives et sur-mesure.' },
      { hid: 'og:image', property: 'og:image', content: "https://bigfiveabidjan.com/images/logobigfiven.png" },
      // twitter card
      { hid: "twitter:title", name: "twitter:title", content: 'Big Five Abidjan' },
      { hid: "twitter:url", name: "twitter:url", content: 'https://bigfiveabidjan.com' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Brand Content / Digital / Communication. Laissez votre empreinte. BIG FIVE Solutions est une agence de agence de communication intégrée qui aide ses clients à se différencier, grâce à des solutions créatives, technologiques, évolutives et sur-mesure.' },
      { hid: "twitter:image", name: "twitter:image", content: "https://bigfiveabidjan.com/images/logobigfiven.png" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', href: 'https://use.typekit.net/wst2spk.css' },
      {rel: 'stylesheet', href: 'https://use.typekit.net/wst2spk.css'}
    ]
  },
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/masonry/4.0.0/masonry.pkgd.min.js",
      type: "text/javascript"
    }
   /*{
      src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
      type: "text/javascript"
    } ,
    {
      src:
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
      type: "text/javascript"
    },
    {
      src:
        "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
      type: "text/javascript"
    } */
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',

  ],
  pwa: {
    meta: {
      title: 'Big Five Abidjan | Agence web à Abidjan',
      author: 'Big Five Abidjan',
      ogType:'website',
      ogSiteName:"Big Five Abidjan",
      ogDescription:"Agence webmarketing à Abidjan",


    },
    image: {
      // Options
    },
    manifest: {
      name: 'Big Five Abidjan',
      short_name: 'Big Five Abidjan',
      lang: 'fr',
    },
    icon: {
      /* icon options */
    },
    ogTitle:{

    },
    ogUrl:{

    }
  },
  i18n: {
    defaultLocale: 'fr',
    detectBrowserLanguage: false,
    /* detectBrowserLanguage: {
      alwaysRedirect: false,
      fallbackLocale: '',
      redirectOn: 'root',
      useCookie: true,
      cookieAge: 365,
      cookieCrossOrigin: false,
      cookieDomain: null,
      cookieKey: 'i18n_redirected',
      cookieSecure: false,
    }, */
    locales: [
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.json'
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json'
      }
    ],
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'fr'
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
