const express = require('express');
const path = require('path')
const app = express();

app.get('/index.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'./demo/index.html'))
}) 

app.listen(3000, () =>{
  console.log('running...')
})