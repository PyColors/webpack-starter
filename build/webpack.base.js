const path = require('path');
// simple path
const root = path.resolve(__dirname, '../');

module.exports = {
  entry: {
    app: ['./src/main.css', './src/main.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    // for --hot
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  module: {
    // before
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /(node_modules|bower_components)/,
      }
    ],
    loaders: [{
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        include: root
      },{
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name]-[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [],
  eslint: {
    configFile: path.resolve(root, './.eslintrc'),
    formatter: require('eslint-friendly-formatter')
  }
}
