//khai bao su dung express
const express =require('express');
const mongoose = require('mongoose');
const app=express();
const config=require('./config/database');
const path=require('path');
//ket noi mongo
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, function(err) {
  if (err) {
    console.log('Could NOT connect to database: ', err);
  } else {
    console.log('Connected to database: ' + config.db);
  }
});
//
app.use(express.static(__dirname+'/client/dist/'));
//router 
//cach khai bao khac ko can function (req,res)=>
app.get('/',function(req,res){
    res.sendfile(path.join(__dirname +'/client/dist/index.html'));
});



app.listen(3000,function(){
    console.log('listen on port 3000');
});

