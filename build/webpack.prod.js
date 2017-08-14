const config = require('./webpack.base')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const extractCSS = new ExtractTextPlugin('bundle.css');

config.plugins = config.plugins.concat([
  extractCSS,
  new webpack.optimize.UglifyJsPlugin({
    comments: false
  })
])

// css-loader - get css and style
// can add in the futur some pre-processed CSS
let cssLoaders = config.module.loaders[0].loaders
config.module.loaders[0].loaders = null
// get loader css and remove first value
config.module.loaders[0].loader = extractCSS.extract(cssLoaders.slice(1,10))

module.exports = config
