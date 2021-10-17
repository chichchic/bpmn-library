const path = require('path')
module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      {
        test: /\.bpmn$/,
        use: {
          loader: 'raw-loader'
        }
      }
    ],
  },
  optimization: { minimizer: [] }
}