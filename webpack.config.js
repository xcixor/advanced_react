const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules'),
    ]
  },
  entry: {
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'prop-types',
      'axios',
      'lodash.pickby',
      'lodash.debounce'
    ],
    app: ['./lib/renderers/dom.js']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }],
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        // vendor chunk
        vendor: {
          // async + async chunks
          chunks: 'all',
          // import file path containing node_modules
          test: /node_modules/,
          // priority
          priority: 20
        },
        // common chunk
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    }
  }
};