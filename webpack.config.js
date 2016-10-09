const path = require('path');
const config = require('./package.json');

const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, config.main),
  devtool: 'source-map',
  output: {
    path: __dirname,
    filename: 'build/bundle.js'
  },
  module: {
    loaders: [
      {test: /\.es6?$/, exclude: /node_modules/, loader: 'babel'}
    ]
  }
};
