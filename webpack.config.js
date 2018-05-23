const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./src/app.js'],
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: ['/node_modules/'],
        query: {
          presets: ['env', 'react']
        }
      }, {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath : 'images/',
              publicPath : path => '../images/' + path
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
  ]
};
