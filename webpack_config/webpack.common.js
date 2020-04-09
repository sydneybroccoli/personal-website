const path = require('path');
const extract = require("mini-css-extract-plugin");
const favicon= require('favicons-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../docs'),
    publicPath: '/'
  },
  module: {
    rules: [
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
    { test: /\.(png|jpe?g|gif|svg|ico)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: './assets/images' } } ] },
    // FONT RULES
    { test: /\.(woff|woff2|ttf|otf|eot)$/,
      use: [
        { loader: 'file-loader',
          options: { outputPath: './assets/fonts' } } ] }
    ] },
  plugins: [
    new extract({
      filename: 'bundle.css'
    }),
    new HTMLWebpackPlugin({
      title: 'SYDNEY BAROVSKY PORTFOLIO',
      template: './src/index.html',
      filename: 'index.html',
      favicon: "./assets/images/favicon/favicon.ico",
    }),
    new CleanWebpackPlugin(),
  ],
};
