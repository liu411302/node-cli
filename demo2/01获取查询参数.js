const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({extended:false}))

app.get('/index.html',(req,res)=>{
    console.log(req.query) // 获取前端传递的参数
    res.send('ok')
})

// 地址传递参数 ？形式 用query获取 
// / 形式传递 用params ,
// post提交数据借助body-parser第三方中间件来获取
// 1,装包 2,引入 3 注册中间件 bodyparser.urlencoded({extended:false})


app.get('/userinfo/:id/:name',(req,res)=>{
    console.log(req.params) // 获取前端传递的参数
    res.send('ok')
})
app.post('/userinfo',(req,res)=>{
    console.log(req.body) // 获取前端传递的参数
    res.send('ok')
})
app.listen('4000',()=>{
    console.log('running...')
    
})