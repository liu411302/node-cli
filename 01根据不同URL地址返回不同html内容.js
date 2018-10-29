const http = require('http');
const fs = require('fs');
const path = require('path')
const server = http.createServer();
server.on('request',(req,res)=>{
    res.writeHeader(200,{
        "Content-Type":"text/html;charset=utf-8"
    })
    const url = req.url;
    const method = req.method.toLowerCase();
    // if(method === 'get' && url === '/demo/index.html'){
    //     readHtmlFile(res,url)
    // }
    // if(method === 'get' && url === '/demo/movie.html'){
    //     readHtmlFile(res,url)
    // }
    // if(method === 'get' && url === '/demo/about.html'){
        readHtmlFile(res,url)
       
    // }
    // if(url === '/movie.html'){
    //     res.end("<h3>电影</h3>")
    // }
    // if(url === '/about.html'){
    //     res.end("<h3>关于</h3>")
    // }else{
    //     res.end('<h1>404</h1>')
    // }
})
server.listen(3000,()=>{
    console.log('服务器已经启动...')
})

function readHtmlFile(res,url){
    fs.readFile(path.join(__dirname,url),'utf-8',(err,data)=>{
        console.log(err)
        if(err) return res.end('404');
        res.end(data)
      })
}