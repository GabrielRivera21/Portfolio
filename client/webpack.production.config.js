var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: ['./build/app.js']
  },
  output: {
    path: path.resolve(__dirname, '../static'),
    publicPath: '/static/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015&presets[]=react&presets[]=stage-0',
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
        {from: "./assets", to: '../static/assets'}
    ])
  ]
};
