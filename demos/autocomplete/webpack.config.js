const webpack = require('webpack');
const path = require('path');

console.log('__dirname', __dirname)
module.exports = {
  entry: [
    //'react-hot-loader/patch',
    './main.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      autocomplete: path.resolve( __dirname, 'autocomplete'),
      component:  path.resolve( __dirname, 'components'),
      container:  path.resolve( __dirname, 'containers')
    }
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  }
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ],
  // devServer: {
  //   contentBase: './',
  //   hot: true
  // }
};
