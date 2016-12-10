var fs = require('fs');

//동기식 파일 출력
var text = fs.readFileSync('fileTest.txt' , 'utf8');
console.log(text);

//비동기식 파일 출력
fs.readFile('fileTest.txt' , 'utf8', function(err , data){
    console.log(data);
})