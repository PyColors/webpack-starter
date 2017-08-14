// shell in node
require('shelljs/global')

const webpack = require('webpack')
const ora = require('ora')
const conf = require('./webpack.prod.js')
const spinner = ora('Loading...')

spinner.start()

// remove dist folder after build
rm('-rf', 'dist')

webpack(conf, function (err, stats) {
  spinner.stop()
  if (err) throw err
  // for console + string
  process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
  }) + '\n')
})
