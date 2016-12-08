var express = require('express');
var app = express();
var path = require('path');

//dirname = 현재위치를 가리키는 전역변수
//static = 정적파일의 기본경로
app.use(express.static(path.join(__dirname , 'html')));
app.get('/' , function(req , res){
    res.sendFile(path.join(__dirname,'html','main.html'));
    console.log(path.join(__dirname,'html','main.html'));
});
app.get('/about' , function(req, res){
    res.sendFile(path.join(__dirname ,'html' , 'about.html'));
});
app.listen(3001 , function(){
    console.log('Sever....3001');
});
