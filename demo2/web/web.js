const express = require('express');
const app = express()

// 托管静态目录
app.use('/node_modules',express.static('../node_modules'))
app.use(express.static('./view'))

app.listen(4000,()=>{
    console.log('running http://127.0.0.1:4000')
})