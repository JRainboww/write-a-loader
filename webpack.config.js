const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production", //设置模式，决定webpack打包优化方式

  entry:  ["./static/js/index.js"], //入口

  module: {
    rules: [
      // 模块规则（配置 loader、解析器等选项）
      {
        test: /\.js$/,
        use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
        }
      },
      {
        test: /\.txt$/,
        use: [
          {
            loader: path.resolve('./my_loader/rawLoader.js')
          }
        ]
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin()] // 附加插件列表

}
