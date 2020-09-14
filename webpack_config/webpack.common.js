// IMPORTS
  // FUNCTIONS
const path = require('path');
  // PLUGINS
const favicon= require('favicons-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CNAMEWebpackPlugin = require('cname-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CSPWebpackPlugin = require('csp-webpack-plugin');
// const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

// VARIABLES
const ROOT_PATH = path.resolve(__dirname, '../');

module.exports = {
  entry: {
    main: ROOT_PATH + '/src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: ROOT_PATH + '/dist',
    publicPath: '/'
  },
  module: {
    rules: [
    // HTML RULES
    { test: /\.(html)$/,
      include: ROOT_PATH + '/assets/pages',
      loader: 'html-loader',
      options: { interpolate: true }
    },
    // JAVASCRIPT RULES
    { test: /\.js$/,
      exclude: /(node_modules)/,  // ignore node_module JS files
      loader: 'babel-loader',
      options: { presets: ['@babel/preset-env']}

    },
    // (S)CSS RULES
    { test:/\.(sa|sc|c)ss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    },
    // ASSETS RULES
    { test: /\.(pdf|png|jpe?g|gif|svg|ico|woff|woff2|ttf|otf|eot)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: ROOT_PATH + '/assets'
          }
        } ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'SYDNEY BAROVSKY PORTFOLIO',
      template: ROOT_PATH + '/src/index.html',
      filename: 'index.html',
      favicon: ROOT_PATH + '/assets/images/favicon/favicon.ico',
    }),
    new CNAMEWebpackPlugin({
      domain: 'sydneybarovsky.com'
    }),
    new CleanWebpackPlugin()
  ],
};
