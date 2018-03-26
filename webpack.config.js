const path = require('path');

module.exports = {
  entry: './js/home.js',
  output: {
    path: path.resolve(__dirname, './js'),
    filename: 'bundle.js'
  }
};