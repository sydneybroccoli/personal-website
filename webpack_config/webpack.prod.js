const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    require('autoprefixer'),
    require('cssnano')
  ]
};
