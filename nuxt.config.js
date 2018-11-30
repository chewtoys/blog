module.exports = {
  mode: 'spa',
  head: {
    title: '前端大户',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { hid: 'author', name: 'author', content: '前端大户' },
      { hid: 'keywords', name: 'keywords', content: '前端大户,个人博客,前端博客,Nuxt,vue服务端渲染,ssr服务端渲染,srr单页面' },
      { hid: 'description', name: 'description', content: '前端大户个人博客,基于Nuxt+axios+mysql+nginx技术栈' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    // script: [{ type: 'text/javascript', charset: 'utf-8', src: 'http://open.51094.com/user/myscript/15bd82635166e1.html'}],
    // __dangerouslyDisableSanitizers: ['script'],
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

