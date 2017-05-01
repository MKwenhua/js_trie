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
     buildtrie: path.resolve( __dirname, 'dist/buildtrie.js'),
     component:  path.resolve( __dirname, 'demos/autocomplete/components'),
     container:  path.resolve( __dirname, 'demos/autocomplete/containers')
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
        ['transform-react-jsx', {
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
