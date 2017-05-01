const debug = false;
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./src/trie.js",
  resolve: {
   extensions: ['.js', '.jsx']
 },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
      presets: ['es2015', 'stage-0']
    },
      }
    ]
  },
  output: {
    filename: "./dist/buildtrie.js",
    libraryTarget: 'commonjs-module',
    library: 'action-autocomplete'
  }
};
