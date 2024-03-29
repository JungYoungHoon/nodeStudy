var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/' , function(req ,res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection' , function(socket){
    console.log('a user connection');
    socket.on('disconnect' , function(){
        console.log('user disconnect');
    })
    socket.on('client message', function(msg){
        console.log('client message: ' + msg);
        io.emit('server message' , msg);
    });
});


http.listen(3001, function(){
    console.log('Severt ... 3001');
});