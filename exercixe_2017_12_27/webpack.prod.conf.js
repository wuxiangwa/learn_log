// webpack.production.config.js
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin")
module.exports = {
  entry: {
    'main': "./app/main.js",
    'main2': "./app/main2.js",
    vendors: ['react', 'react-dom']  //入口文件的公共文件
  },
  output: {
    path: __dirname + "/dist",
    filename: '[name].js'
  },
  devtool: 'null', //注意修改了这里，这能大大压缩我们的打包代码
  devServer: {
    contentBase: __dirname,
    historyApiFallback: true,
    inline: true, //实时刷新
    hot: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }, {
                    loader: "postcss-loader"
                }]
        })
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + "/app/index.tmpl.html",
      inject: true,
      chunks: [ 'vendors', 'main']
    }),
    new HtmlWebpackPlugin({
      filename: 'index2.html',
      template: __dirname + "/app/index.html",
      inject: true,
      chunks: [ 'vendors', 'main2']
    }),
    new webpack.HotModuleReplacementPlugin(),  //热加载插件
    new webpack.optimize.CommonsChunkPlugin({ //公共模块处理
      name: 'vendors',
      filename: 'vendor.js'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("style.css"),
    new CleanWebpackPlugin('dist/*.*', {
      root: __dirname,
      verbose: true,
      dry: false
    })
  ]
}
