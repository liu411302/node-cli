const mysql = require('mysql')
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'mydb_1029'
})

const p1 = {
    userName:'wahaha',
    age:10,
    gender:'男'
}

// 写入数据第一种写法
// const sqlstr = 'insert into users (userName,age,gender) values("'+p1.userName+'",'+p1.age+',"'+p1.gender+'")'
 
// conn.query(sqlstr,(err,result)=>{
//     if(err) return console.log(err)
//     console.log(result)
//     if(result.affectedRows === 1){
//         console.log('写入成功')
//     }else{
//         console.log('写入失败')
//     }
// })


// 第二种写法插入数据
// const sqlstr = 'insert into users set ?' // ? 表示占位符 将来要使用具体的参数来填充
// conn.query(sqlstr,p1,(err,result)=>{
//     console.log(result)
// })


// 删除数据
// const sqlstr = 'delete from users where id=?'
// conn.query(sqlstr,2,(err,result)=>{
//     console.log(err,result)
// })

// 改变数据
// const p2 = {
//     id:1,
//     userName:'修改数据',
//     age:90,
//     gender:'女'
// }
// const sqlstr = 'update users set ? where id = ?'
// conn.query(sqlstr,[p2,p2.id],(err,result)=>{
//     console.log(err,result)
// })

//实现软删除
// const sqlstr = 'update users set isdel = 1 where id = 1'
// conn.query(sqlstr,(err,result)=>{
//     console.log(err,result)
// })

// 查询未被删除的数据
const sqlstr = 'select * from users where isdel = 0'
conn.query(sqlstr,(err,results)=>{
console.log(err,results)
})