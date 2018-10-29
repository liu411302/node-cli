const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const writeLogs = require('./05mywriteFileLog.js')
app.use(writeLogs)

const bodyParser = require('body-parser')  // 解析表单数据中间件 body-parser
app.use(bodyParser.urlencoded({extended:false}));
// const parseFrom = require('./05parseFrom中间件.js')
// app.use(parseFrom) // 调用中间件一定要在路由模块调用之前

const router = require('./router.js')
app.use(router)



app.listen('3000',()=>{
    console.log('running...')
})



