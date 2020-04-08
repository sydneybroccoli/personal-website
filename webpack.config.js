const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: './assets/javascript/index.js'
  },
  devServer: { contentBase: './dist' },
  module: {
    rules: [
    { test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'] } } },
    { test: /\.(sa|sc|c)ss$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        { loader: 'css-loader', },
        { loader: 'postcss-loader' },
        {
          loader: 'sass-loader',
          options: { implementation: require('sass') } } ] } ] },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'bundle.css' }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: 'index.html' }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
};
