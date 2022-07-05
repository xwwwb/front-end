module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
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
      }
    ]
  },
  plugins: [

  ],
  mode: 'development',
  // mode: 'production',
}