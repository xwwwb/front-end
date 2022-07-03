module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  plugins: [

  ],
  mode: 'development',
  // mode: 'production',
}