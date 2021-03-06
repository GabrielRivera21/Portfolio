var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

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
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?minimize!",
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
        {from: "./static", to: '../static'}
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'GM_API_KEY': JSON.stringify('AIzaSyDonpeckfQqPosKw8Aa3hn90C8RMQj-n8s')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
       compress:{
         warnings: true
       }
    }),
  ]
};
