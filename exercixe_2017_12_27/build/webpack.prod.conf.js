'use strict'
const baseWebpackConfig = require('./webpack.base.conf')
const Merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require('extract-text-webpack-plugin')

  module.exports = Merge(baseWebpackConfig, {
  devtool: 'null',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
    publicPath: './'
  },
  plugins: [
    new CleanWebpackPlugin('dist/*.*', {
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
      // chunks: []
    }),
    new webpack.optimize.CommonsChunkPlugin({ //公共模块处理
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({ //公共模块处理
      name: 'manifest'
    }),
    // new ExtractTextPlugin({
    //   filename: '[name].[contenthash].css',
    //   allChunks: false,
    // }),

    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ]
})
