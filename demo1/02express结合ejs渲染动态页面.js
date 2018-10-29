const express = require('express');
const path = require('path')
const app = express();

const person1 = {
    name:'zs',
    age:12,
    gender:'妖',
    hobby:['吃1','喝1','睡觉1']
}
const person2 = {
    name:'zs',
    age:12,
    gender:'妖',
    hobby:['吃2','喝2','睡觉2']
}
const person3 = {
    name:'zs',
    age:12,
    gender:'妖',
    hobby:['吃3','喝3','睡觉3']
}
app.set('view engine','ejs')
app.set('views','./views')
app.get('/',(req,res)=>{
    //res.sendFile(path.join(__dirname,'./views/index2.html'));
    res.render('index2',person1)
})
app.get('/g2',(req,res)=>{
    //res.sendFile(path.join(__dirname,'./views/index2.html'));
    res.render('index2',person2)
})
app.get('/g3',(req,res)=>{
    //res.sendFile(path.join(__dirname,'./views/index2.html'));
    res.render('index2',person3)
})
app.listen('3000',()=>{
    console.log('running...')
})