var path = require('path');
var webpack = require('webpack')
// var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: ['./app.js'],
  output: {
    path: path.resolve('./bundles/'),
    filename: 'bundle.js'
  },
  module: {
      loaders: [
          {
            test: require.resolve('jquery'),
            loader: 'expose?$!expose?jQuery'
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              plugins: ['transform-runtime'],
              presets: ['es2015']
            }
          }
      ]
  },
  resolve: {
    moduleDirectores: ['node_modules'],
    extensions: ['', '.js']
  }
};