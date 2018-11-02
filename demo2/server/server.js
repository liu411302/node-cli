// 服务端 接口的入口文件
const express = require('express');
const cors = require('cors');
const moment = require('moment');
const app = express();

//注册使用连接数据库模块
const mysql = require('mysql');
app.use(cors())

//注册使用解析表单提交的第三方中间件模块
const bodyParser = require('body-parser')
app.use(bodyParser())


const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'mydb_1029'
})


// 获取所有未删除的数据列表
app.get('/api/getheros',(req,res)=>{
    const sqlstr = 'select * from heros where isdel = 0 order by id asc'
    conn.query(sqlstr,(err,results)=>{
        if (err) return res.json({err_code:1,message:'数据获取失败',affectedRows:0});
        res.json({err_code:0,message:results,affectedRows:0})
    })
})

// 根据id更新指定的英雄信息的API接口
app.post('/api/updatheros',(req,res)=>{
    const sqlstr = 'update heros set ? where id = ?'
    conn.query(sqlstr,[req.body,req.body.id],(err,results)=>{
        //如果发成错误
        if (err) return res.json({err_code:1,message:'更新英雄失败',affectedRows:0});
        //如果影响行数不等于1 ，更新的数据列表中不存在 则也为err
        if (results.affectedRows != 1) return res.json({err_code:1,message:'更新英雄不存在',affectedRows:0});
        res.json({err_code:0,message:'更新成功',affectedRows:results.affectedRows})
    })
})

// 根据id获取指定的英雄信息的API接口
app.get('/api/gethero',(req,res)=>{
    const id = req.query.id;
    const sqlstr = 'select * from heros where id = ?'
    conn.query(sqlstr,id,(err,results)=>{
        //如果发成错误
        console.log(results)
        if (err) return res.json({err_code:1,message:'获取英雄失败',affectedRows:0});
        //如果影响行数不等于1 ，更新的数据列表中不存在 则也为err
        if (results.length != 1) return res.json({err_code:1,message:'英雄不存在',affectedRows:0});
        res.json({err_code:0,message:results[0],affectedRows:results.affectedRows})
    })
})

// 根据id删除指定的英雄信息的API接口
app.get('/api/delhero',(req,res)=>{
    const id = req.query.id;
    const sqlstr = 'update heros set isdel = 1 where id = ?'
    conn.query(sqlstr,id,(err,results)=>{
        //如果发成错误
        if (err) return res.json({err_code:1,message:'删除英雄失败',affectedRows:0});
        //如果影响行数不等于1 ，更新的数据列表中不存在 则也为err
        if (results.affectedRows != 1) return res.json({err_code:1,message:'删除英雄失败',affectedRows:0});
       // if (results.length != 1) return res.json({err_code:1,message:'英雄不存在',affectedRows:0});
        res.json({err_code:0,message:'软删除成功',affectedRows:results.affectedRows})
    })
})
 

// 添加英雄信息的API接口
app.post('/api/addhero',(req,res)=>{
    const hero = req.body;
    console.log(hero)
    hero.ctime =moment().format('YYYY-MM-DD HH:mm:ss')
    const sqlstr = 'insert into heros set ?'
    conn.query(sqlstr,hero,(err,results)=>{
        //console.log(results)
        //如果发成错误
        if (err) return res.json({err_code:1,message:'添加英雄失败',affectedRows:0});
        //如果影响行数不等于1 ，更新的数据列表中不存在 则也为err
        if (results.affectedRows != 1) return res.json({err_code:1,message:'添加英雄失败',affectedRows:0});
       // if (results.length != 1) return res.json({err_code:1,message:'英雄不存在',affectedRows:0});
        res.json({err_code:0,message:'添加英雄成功',affectedRows:results.affectedRows})
    })
})
app.listen(5000,()=>{
    console.log('running http://127.0.0.1:5000')
})