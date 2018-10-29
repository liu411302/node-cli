const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(mywriteFileLog)
app.get('/',(req,res)=>{
    res.send('ok')
})
app.get('/index.html',(req,res)=>{
    res.send('ok')
})
app.post('/api/postinfo',(req,res)=>{
    res.send('服务器处理post结果')
})

app.listen('3000',()=>{
    console.log('running...')
})

// 写入日志中间件方法
function mywriteFileLog(req,res,next){
    const logTime = ` ${new Date().toLocaleString()} ${req.method} ${req.url} \n`;
    fs.appendFile(path.join(__dirname,'./info.txt'),logTime,(error)=>{
        if(!error) console.log('写入成功');
    })
    next();
}