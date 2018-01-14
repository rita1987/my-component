// see http://vuejs-templates.github.io/webpack for documentation.
//https://www.cnblogs.com/whkl-m/p/6627864.html

var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../manage/index.html'), //build目标地址
    assetsRoot: path.resolve(__dirname, '../manage'),
      /*被webpack编译处理过的资源文件都会在这个build.assetsRoot目录下，所以它不可以混有其它可能在build.assetsRoot里面有的文件。
      例如，假如build.assetsRoot参数是/path/to/dist，build.assetsSubDirectory 参数是 static,
      那么所以webpack资源会被编译到path/to/dist/static目录。
       每次编译前，这个目录会被清空，所以这个只能放编译出来的资源文件。
       static/目录的文件会直接被在构建过程中，直接拷贝到这个目录。这意味着是如果你改变这个规则，
       所有你依赖于static/中文件的绝对地址，都需要改变。*/
    assetsSubDirectory: 'static',
      /*资源的根目录，这个是通过http服务器运行的url路径*/
    assetsPublicPath: '/manage/',
    productionSourceMap: false, //在构建生产环境版本时是否开启source map。
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false, //是否开启 gzip
    productionGzipExtensions: ['js', 'css'], //需要使用 gzip 压缩的文件扩展名
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: { //dev 环境
    env: require('./dev.env'), // 使用 config/dev.env.js 中定义的编译环境
    port: 8002, // 运行测试页面的端口
    autoOpenBrowser: true,
    assetsSubDirectory: 'static', // 编译输出的二级目录
    assetsPublicPath: '/', // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
    proxyTable: {}, // 需要 proxyTable 代理的接口（可跨域）
    context: [ //代理路径
        '/shopping',
        '/ugc',
        '/v1',
        '/v2',
        '/v3',
        '/v4',
        '/bos',
        '/member',
        '/promotion',
        '/eus',
        '/payapi',
        '/admin',
        '/statis',
        '/img',
    ],
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
