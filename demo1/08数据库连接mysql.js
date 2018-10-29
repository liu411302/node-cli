const mysql = require('mysql');

//1创建数据库的连接对象
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'mydb_1029'
})
// conn.connect();

const sqlstr = 'select * from users'

conn.query(sqlstr,(err,results)=>{
    console.log(err)
    console.log(results)
})