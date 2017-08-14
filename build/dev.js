/*
file for Dev
*/
const webpack = require('webpack')
const config = require('./webpack.dev.js')
const chokidar = require('chokidar')
const webpackDevServer = require('webpack-dev-server')
const port = 8080;

// add compiler
const compiler = webpack(config);
const hotMiddleWare = require('webpack-hot-middleware')(compiler)

// Listen all HTML files
chokidar.watch('./*.html').on('all', function () {
  hotMiddleWare.publish({ action: 'reload'})
})

// get configuration by webpack
let server = new webpackDevServer(compiler, {
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
