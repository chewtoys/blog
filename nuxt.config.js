module.exports = {
  mode: 'universal',
  head: {
    title: '前端大户-前端技术原创博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { hid: 'author', name: 'author', content: '前端大户' },
      { hid: 'keywords', name: 'keywords', content: '前端大户,个人博客,nuxt博客,web前端开发,vue博客,前端技术博客,Nuxt,vue服务端渲染,' },
      { hid: 'description', name: 'description', content: '前端大户，一个专注于web前端开发的个人原创博客。记录博主对于Vue(Nuxt)、React、ReactNative、Node(Koa2/Eggjs)、Html5、CSS3等各类前端技术的学习使用心得。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_852729_lkb7rcj6b1n.css' },
    ]
  },
  css: [
    '~assets/css/reset.scss',
    '~assets/css/style.scss',
    'element-ui/lib/theme-chalk/index.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#f90' },
  plugins: [
    { src:'~plugins/element-ui', ssr: true },
    { src: "~plugins/vue-quill-editor.js", ssr: false },
  ],
  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    extractCSS: { allChunks: true },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      const sassResourcesLoader = {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            'assets/css/base.scss'
          ]
        }
      }
      // 遍历nuxt定义的loader配置，向里面添加新的配置。
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.vue$/') {
          rule.options.loaders.sass.push(sassResourcesLoader)
          rule.options.loaders.scss.push(sassResourcesLoader)
        }
        if (['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1) {
          rule.use.push(sassResourcesLoader)
        }
      })

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // vendor: ['element-ui','axios','vue-quill-editor'],
  }
}

