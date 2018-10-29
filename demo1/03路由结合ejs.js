const express = require('express');
const path = require('path')
const app = express();
const router = require('./router.js');

app.set('view engine','ejs') 
app.set('views','./views')
console.log(router)
app.use(router)
app.listen('3000',()=>{
    console.log('running...')
})