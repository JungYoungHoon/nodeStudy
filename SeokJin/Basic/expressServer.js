var express = require('express');
var app = express();

//인자 순서에 유의...
app.get('/', function(req, res){
    res.send('<h1> Hello world</h1>');
});

app.listen(3000, function(){
    console.log('3000 ..... run ....');
})
