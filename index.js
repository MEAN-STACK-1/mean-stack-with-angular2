//khai bao su dung express
const express =require('express');
const app=express();

//router 
//cach khai bao khac ko can function (req,res)=>
app.get('/',function(req,res){
    res.send('hello');
});

app.listen(3000,function(){
    console.log('listen on port 3000');
});

