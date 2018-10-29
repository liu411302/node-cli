const fs = require('fs');
const path = require('path');
// 写入日志中间件方法
function mywriteFileLog(req,res,next){
    const logTime = ` ${new Date().toLocaleString()} ${req.method} ${req.url} \n`;
    fs.appendFile(path.join(__dirname,'./info.txt'),logTime,(error)=>{
        if(!error) console.log('写入成功');
    })
    next();
}
module.exports = mywriteFileLog;