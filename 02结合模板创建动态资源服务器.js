const http = require('http');
const fs = require('fs');
const path = require('path')
const template = require('art-template')
const server = http.createServer();
server.on('request',(req,res)=>{
    res.writeHeader(200,{
        "Content-Type":"text/html;charset=utf-8"
    })
    const params = {
        name:'zs',
        age:10,
        gender:'妖',
        hobby:['吃','喝','玩']
    }
    const url = req.url;
    const method = req.method.toLowerCase();
   const htmlstr = template(path.join(__dirname,'/demo/tmpl.html'),params)
    res.end(htmlstr)
})
server.listen(3000,()=>{
    console.log('服务器已经启动127.0.0.1:3000...')
})

