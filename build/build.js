require('./check-versions')()

//process：代表当前Node.js进程。通过process对象可以拿到许多有用信息，作为一个对象，它对于 Node.js 应用程序始终是可用的，故无需使用 require()。
//process.env属性返回一个包含用户环境信息的对象
//在Windows系统下，环境变量是不区分大小写的
process.env.NODE_ENV = 'production'

var ora = require('ora') //实现node.js 命令行环境的 loading效果， 和显示各种状态的图标等
var rm = require('rimraf')  //删除已发布文件  rimraf(f, [opts], callback)
var path = require('path') //path 模块提供了一些工具函数，用于处理文件与目录的路径
var chalk = require('chalk') //颜色插件
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if (err) throw err
    webpack(webpackConfig, function (err, stats) {
        spinner.stop()
        if (err) throw err
        //process.stdout 属性返回连接到 stdout (fd 1)的流
        process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n')

        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
    })
})
