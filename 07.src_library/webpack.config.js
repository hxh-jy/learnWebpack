let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/js/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `webpack-numbers.js`,
      library: {
          name: 'webpackNumbers',
          type: 'umd'
      },
      clean: true, 
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: '开发环境'
    //     })
    // ],
}