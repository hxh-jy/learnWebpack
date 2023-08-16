let path = require('path')
module.exports = {
    entry: './src/js/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `bundle.js`,
      clean: true,
    },
    optimization: {
      usedExports: true,
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: '开发环境'
    //     })
    // ],
}