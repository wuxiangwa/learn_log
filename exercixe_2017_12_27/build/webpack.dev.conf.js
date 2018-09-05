'use strict'
const baseWebpackConfig = require('./webpack.base.conf')
const Merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = Merge(baseWebpackConfig, {
  devtool: 'eval-source-map',
  devServer: {
    port: 3333,
    host: 'localhost',
    historyApiFallback: true, //不跳转
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin() //热加载插件
  ]
})
