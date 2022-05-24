module.exports = {
  module: {
    rules: [{
      test: /.js?$/,
      loader: 'babel-loader',  //使用babel-loader进行打包
      exclude: /node_modules/,//不打包node_modules中的js文件
    }]
  }
}