module.exports = {
  /**
   * default: '/'
   * App running at:
   * - develop:   http://localhost:8080/develop-zhou/
   * - production: http://xx.xx.xx.xx:8080/prod/
   */

  publicPath: process.env.NODE_ENV == "production" ? "/prod" : "/develop-zhou",
  // default: 'dist'
  outputDir: "dist",
  // default: ''
  assetsDir: "static",
  // default: 'index.html'
  indexPath: "index.html",
  // default: true （要求index.html是被Vue CLI自动生成的）
  filenameHashing: true,
  // default: undefined Type: Object
  // pages: {
  //   index: {
  //     entry: 'src/main.ts'
  //   },
  //   subpage: 'src/subpage/main.js'
  // }
  /**
   * true: 保存代码时会检查代码格式，并在控制台显示eslint错误
   * false: 保存代码时不会检查代码格式，不会在控制台显示eslint错误
   */
  lintOnSave: process.env.NODE_ENV !== "production",
  // default: false
  // 需要编译器{runtimeCompiler: true}
  // new Vue({
  //   template: '<div>{{ hi }}</div>'
  // })
  runtimeCompiler: false,
  // default: []
  // 想要用babel-loader显式转换的node_modules目录下的某个依赖
  transpileDependencies: [],
  // default: true
  productionSourceMap: true,
  // default: undefined
  crossorigin: undefined,
  // default: false
  integrity: false,
  // 修改webpack的默认设置
  // Object || Function
  configureWebpack: {
    // plugin: [
    //   new MyAwesomeWebpackPlugin()
    // ]
  },
  // Function 接收一个ChainableConfig实例，允许对内部的webpack配置进行更细粒度的修改
  chainWebpack: config => {},
  css: {
    // default: true
    requireModuleExtension: true,
    // 是否主动将组件中的css提取到一个独立的css文件
    // default: 生产环境true，开发环境false
    extract: process.env.NODE_ENV == "production" ? true : false,
    // default: false 开启为true可能影响性能
    sourceMap: false,
    // > 我们默认开启了 autoprefixer。# https://cli.vuejs.org/zh/guide/css.html#postcss
    loaderOptions: {
      scss: {
        // 全局引入公共样式
        prependData: '@import "~@/assets/scss/variables.scss";'
      },
      sass: {
        prependData: '@import "~@/assets/scss/variables.scss"'
      },
      less: {}
    }
  },
  // 代理配置
  devServer: {
    port: 8090,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {
          "^/api": ""
        },
        secure: false // 可在htps上且使用了无效证书的后端服务器上运行
      }
    }
  },
  // default: require('os').cups().length > 1
  // 当cpu内核多于一个时，自动为Babel或TypeScript使用thread-loader，仅作用于生产构建
  // parallel: require('os').cups().length > 1,
  // 渐进式web应用
  pwa: {
    themeColor: "pink",
    msTileColor: "yellowgreen",
    appleMobileWebAppCapable: "no",
    appleMobileWebAppStatusBarStyle: "default",
    assetsVersion: "9.9.9",
    manifestPath: "manifest.json",
    manifestOptions: {},
    iconPaths: {
      favicon32: "",
      favicon16: "",
      appleTouchIcon: "",
      maskIcon: "",
      msTileImage: ""
    }
  },
  // 插件
  pluginOptions: {}
};
