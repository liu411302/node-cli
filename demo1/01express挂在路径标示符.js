const express = require('express');
const app = express();


app.use(express.static('./views'));
app.use('/asstes',express.static('/asstes'))



app.listen('3000',()=>{
    console.log('running...')
})