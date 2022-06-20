// 参考文档 https://segmentfault.com/a/1190000018079170

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 分析包内容
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './example/src/index.html'),
  filename: './index.html',
})

module.exports = {
  entry: path.join(__dirname, './example/src/app.js'),
  output: {
    path: path.join(__dirname, 'example/dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd', // 采用通用模块定义
    libraryExport: 'default', // 兼容 ES6 的模块系统、CommonJS 和 AMD 模块规范
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

  plugins: [
    htmlWebpackPlugin,
    // 开启分析
    // new BundleAnalyzerPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 8002,
  },
}
