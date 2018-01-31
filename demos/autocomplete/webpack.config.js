const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const StylesLoader = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    use: [
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          modules: false
        }
      }, {
        loader: require.resolve('postcss-loader'),
        options: {
          indent: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9',
              ],
              flexbox: 'no-2009'
            })
          ]
        }
      }
    ]
  })
}

module.exports = {
  entry: [
    './main.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      StylesLoader,
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      autocomplete: path.resolve( __dirname, 'autocomplete'),
      component:  path.resolve( __dirname, 'components'),
      container:  path.resolve( __dirname, 'containers'),
      stylesheet:  path.resolve( __dirname, 'styles')
    }
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin({filename: "styles.css"})
  ]
};
