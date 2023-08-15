let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        another: './src/another-module.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name]-bundle.js',
      clean: true, 
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
            {
              test: /\.(csv|tsv)$/i,
              use: ['csv-loader'],
            },
            {
              test: /\.xml$/i,
              use: ['xml-loader'],
            },
        ]
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
        splitChunks: {
          chunks: 'all',
        },
    },
}