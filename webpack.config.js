const debug = false;
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./demos/autocomplete/main.js",
  resolve: {
   extensions: ['.js', '.jsx'],
   alias: {
     src: path.resolve( __dirname, 'demos/autocomplete/src'),
     ex: path.resolve( __dirname, 'demos/autocomplete/src/ex.js')
   }
 },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
      presets: ['es2015', 'stage-0'],
      plugins: [
        ['transform-react-jsx', { //this
          'pragma': 'EX.node'
        }]
      ]
    },
      }
    ]
  },
  output: {
    filename: "./demos/autocomplete/dist/bundle.js"
  }
};
