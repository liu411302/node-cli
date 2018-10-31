const http = require('http');
const server = http.createServer();
server.on('request',function(req,res){
    res.writeHeader(200,{
        "Content-Type":"text/html;charset=utf-8"
    })
    console.log('启动了')
    console.log(req.method.toLowerCase())
    res.end('这是服务器返回的数据');
})
server.listen(1000,function(){
    console.log('服务器启动了...')
})  