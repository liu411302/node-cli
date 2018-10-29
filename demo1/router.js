const express = require('express');
const router = express.Router();
const querystring = require('querystring')
// const person1 = {
//     name:'zs',
//     age:12,
//     gender:'妖',
//     hobby:['吃1','喝1','睡觉1']
// }
// const person2 = {
//     name:'zs',
//     age:12,
//     gender:'妖',
//     hobby:['吃2','喝2','睡觉2']
// }
// const person3 = {
//     name:'zs',
//     age:12,
//     gender:'妖',
//     hobby:['吃3','喝3','睡觉3']
// }


router.get('/movie.html',(req,res)=>{
    res.send('电影')
})
router.get('/index.html',(req,res)=>{
    res.send('首页')
})
router.get('/about.html',(req,res)=>{
    res.send('关于')
})
router.post('/api/postinfo',(req,res)=>{
   console.log(req.body)
   res.send('你提交的数据是' + JSON.stringify(req.body))
})
module.exports = router;