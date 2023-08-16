let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `[name].[contenthash].js`,
      clean: true, 
    },
    devtool: 'inline-source-map',  // 不要在生产环境中用
    devServer: {
        static: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '开发环境'
        })
    ],
    optimization: {
      moduleIds: 'deterministic',  // 为了保持vendor的hash一致
      runtimeChunk: 'single',
      splitChunks: {
          cacheGroups: {  // 将node-modules的引用单独打包成一个文件
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
            }
          }
      }
    },
}