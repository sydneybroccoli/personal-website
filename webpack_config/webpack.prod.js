const path = require('path');

module.exports = {
  mode: 'production',
  plugins: [
    require('autoprefixer'),
    require('cssnano')
  ]
};
