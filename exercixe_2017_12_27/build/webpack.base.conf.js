'use strict'
const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './app/main.js',
    vendor: ['react', 'react-dom'] //入口文件的公共文件
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }, {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
}
