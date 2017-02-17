var debug = true;
var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./demos/autocomplete/main.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015']
        }
      }
    ]
  },
  output: {
    filename: "./demos/autocomplete/dist/bundle.js"
  }
};
