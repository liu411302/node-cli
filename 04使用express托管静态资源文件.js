const express = require('express');
const path = require('path')
const compression = require('compression')
const app = express();
app.use(compression()) //全部启用压缩功能
app.use(express.static('./demo')); // 托管静态文件 
app.use(express.static('./asstes')); // 托管静态文件 

app.listen(3000, () =>{
  console.log('running...')
})