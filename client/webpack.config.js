var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./build/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'app.js'
  },
  devServer: {
   proxy: [
       {
         context: ['/api/**', '/media/**'],
         target: 'http://localhost:8000',
         secure: false
       },
   ]
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
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'GM_API_KEY': JSON.stringify('')
      }
    }),
  ],
};
