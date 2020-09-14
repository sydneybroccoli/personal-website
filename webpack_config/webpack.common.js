// IMPORTS
  // FUNCTIONS
const path = require('path');
  // PLUGINS
const extract = require("mini-css-extract-plugin");
const favicon= require('favicons-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CSPWebpackPlugin = require('csp-webpack-plugin');
const CNAMEWebpackPlugin = require('cname-webpack-plugin');

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
    // HTML PARTIALS RULES
    { test: /\.(html)$/,
      include: ROOT_PATH + '/assets/pages',
      use: {
        loader: 'html-loader',
        options: {} 
      } 
      },
    // JAVASCRIPT RULES
    { test: /\.js$/,
      exclude: /(node_modules)/,  // ignore node_module JS files
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'] } } },
    // (S)CSS RULES
    { test:/\.(sa|sc|c)ss$/,
      use: [
        { loader: extract.loader },   // gets all transformed CSS and extracts it into a separate single bundled file
        { loader: 'css-loader' },     // resolves url() and @imports inside CSS
        { loader: 'postcss-loader' }, // applies autoprefixer and minifying
        { loader: 'sass-loader',      // transform SASS to standard CSS
          options: { implementation: require('sass') }
        } ]
    },
    // IMAGE RULES
    { test: /\.(pdf|png|jpe?g|gif|svg|ico)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: ROOT_PATH + '/assets/images'
          }
        } ]
      },
    // FONT RULES
    { test: /\.(woff|woff2|ttf|otf|eot)$/,
      use: [
        { loader: 'file-loader',
          options: { outputPath: ROOT_PATH + '/assets/fonts' } } ] }
    ] },
  plugins: [
    new extract({
      filename: 'bundle.css'
    }),
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
