var fs = require('fs');

var text = 'Hello Node.js';

//동기식 입력
fs.writeFileSync('./inputText.txt', text , 'utf8');

//비동기식 입력
fs.writeFile('./inputTest2.txt' , text ,'utf8', function(err){
    console.log('비동기 입력완료');
})

