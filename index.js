const fs = require('fs'); // 文件模块
const path = require('path'); // 路径模块
const { COPYFILE_EXCL } = fs.constants; // 复制文件模块 
const http = require('http'); // 服务器模块
// 文件操作 fs
// 读取文件
fs.readFile('./ss.xls','utf-8',(err,data)=>{
    if (err) return console.log(err.message);
    console.log(data);
})

// 写入文件
// fs.writeFile('./1.txt','333',(err)=>{
//     if (err) return console.log(err.message);
// })

// 复制文件
// fs.copyFile('./2.txt','./3.txt',COPYFILE_EXCL,(err)=>{
//     if (err) return console.log(err.message);
// })

// 追加文件
// fs.appendFile(__dirname + '/1.txt','99',(err)=>{
//     if (err) return console.log(err.message);
// })

// 查询文件信息
// fs.stat(path.join(__dirname,'1.txt'),(err,stats)=>{
//     if (err) return console.log(err.message);
//     console.log(stats)
// })

// 读取目录 获取目录下所有文件和文件夹
// fs.readdir(__dirname,(err,files)=>{
//     console.log(files)
// })

// 路径操作 path

// 拼接路径
// const abspath = path.join(__dirname , '1.txt')
// console.log(abspath)
 
// 单线程
// 多线程

// 创建服务器
// const server = http.createServer();
// server.on('request',(req,res)=>{
//     res.writeHeader(200,{
//         'Content-type':'text/html;charset=utf-8'
//     })
//     res.end('返回的URL是' + req.url)
// })
// server.listen(3000,()=>{
//  console.log('running...')
// })