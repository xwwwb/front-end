const ESLintPlugin = require('eslint-webpack-plugin');
const HTMLWebPackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist', // 开发模式无输出 这里随意
    filename: 'bundle.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 40 * 1024
          }
        },
        generator: {
          filename: 'img/[hash:5][ext]',
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: 'font/[hash:5][ext]',
        }
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      context: 'src',
    }),
    new HTMLWebPackPlugin({
      template: './public/index.html',
    })
  ],
  mode: 'development',
  // mode: 'production',
  // 不会输出文件
  devServer: {
    port: '3000',
    host: 'localhost',
    open: true
  }
}