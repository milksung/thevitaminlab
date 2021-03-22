export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/assets/images/vitamin-favicon.png' },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" },
            { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
            { rel: "stylesheet", href: "/assets/css/font-awesome.min.css" },
            { rel: "stylesheet", href: "/assets/css/flaticon.css" },
            { rel: "stylesheet", href: "/assets/plugins/glightbox/glightbox.min.css" },
            { rel: "stylesheet", href: "/assets/css/nice-select.css" },
            { rel: "stylesheet", href: "/assets/css/animate.min.css" },
            { rel: "stylesheet", href: "/assets/css/default.css" },
            { rel: "stylesheet", href: "/assets/css/style.css" },
        ],

        script: [
            { src: "/assets/plugins/glightbox/glightbox.min.js", body: true },
            { src: "/assets/plugins/accordion/accordion.min.js", body: true },
            // { src: "/assets/js/owl.carousel.js", body: true },
            // { src: "/assets/js/owl.carousel.min.js", body: true },
            { src: "http://code.jquery.com/jquery-1.11.1.min.js", body: true },
            { src: "http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js", body: true },
            { src: "http://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js", body: true },
            // { src: "/assets/js/cart.js", body: true },
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#f51b1c', height: '4px' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: 'plugins/owl.js', ssr: false },
        { src: 'plugins/mixitup.js', ssr: false },
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/axios'],

    axios: {
        baseURL: 'https://picsum.photos/v2/list?limit=12', // Used as fallback if no runtime config is provided
    },

    publicRuntimeConfig: {
        axios: {
            browserBaseURL: process.env.BROWSER_BASE_URL
        }
    },

    privateRuntimeConfig: {
        axios: {
            baseURL: process.env.BASE_URL
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }


}