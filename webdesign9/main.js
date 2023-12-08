console.log("Hello, World!")

const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const url ="mongodb://localhost:27017/userDB";

const app = express();

mongoose.connect(url,{useNewUrlParser : true});
const con = mongoose.connection;

con.on('open',function(){
    console.log("Connected to Server...")
})

const userRouter = require('./api/routes/user')

app.use('/user',userRouter)

app.use(express.json);

// app.listen(9000,() => {
//     console.log("listening to Server...")

// })


