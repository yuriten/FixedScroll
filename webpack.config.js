// 参考文档 https://segmentfault.com/a/1190000018079170

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './example/src/index.html'),
  filename: './index.html',
})

module.exports = {
  entry: path.join(__dirname, './example/src/app.js'),
  output: {
    path: path.join(__dirname, 'example/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 8002,
  },
}
