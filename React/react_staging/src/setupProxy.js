const proxy = require('http-proxy-middleware')

module.exports = function (app){
app.use(
   proxy('/api1',{ //遇见api1的请求就会触发该代理配置
      target : 'http://localhost:5000',
      changeOrigin:false, //控制服务器收到的请求中的头Host字段的值
      pathRewrite:{'^/api1':''} //重写请求路径
      
   })

)
}