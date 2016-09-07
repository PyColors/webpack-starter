/*
file for Dev
*/
var webpack = require('webpack')
var config = require('./webpack.dev.js')
var chokidar = require('chokidar')
var webpackDevServer = require('webpack-dev-server')
var port = 8080;

// add compiler
var compiler = webpack(config);
var hotMiddleWare = require('webpack-hot-middleware')(compiler)

// Listen all HTML files
chokidar.watch('./*.html').on('all', function () {
  hotMiddleWare.publish({ action: 'reload'})
})

// get configuration by webpack
var server = new webpackDevServer(compiler, {
  hot: true,
  /**
  * Dev server for tests
  proxy: {
    "*": {
      target: "http://www.pycolors.com/",
      changeOrigin: true
    }
  },
  */
  contentBase: './',
  quiet: false,
  noInfo: false,
  publicPath: config.output.publicPath,
  stats: { colors: true }
});

// add hot-middleware to the server (MHR)
// Can see Errors on the front end
server.use(hotMiddleWare)

server.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Listen on the port: " + port)
  }
})
