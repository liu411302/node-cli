const querystring = require('querystring')
function parseFrom (req, res, next) {
    let dataStr = '';
    req.on('data',(chunk)=>{
        dataStr += chunk;
    })
    req.on('end',()=>{
        const result = querystring.parse(dataStr)
        req.body = result;
        next()
    })    
   
   // res.send('post请求处理')
}
module.exports = parseFrom;