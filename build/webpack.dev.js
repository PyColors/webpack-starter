var config = require('./webpack.base')
var webpack = require('webpack')

// add compiler HTML...
// add file for entry
config.entry.app.unshift("./build/dev-client.js")

// Hot Module Replacement with node.js AP
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),

  // Compile if Error (webpack-hot-middleware)
  new webpack.NoErrorsPlugin()
])

module.exports = config