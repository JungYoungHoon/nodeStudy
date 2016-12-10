var calc = require('./module1');
var calc2 = require('./module2');
//moudel 1 객체를 모듈화
var result = calc.add(5,10);
console.log(result);

//module2
var result2 = calc2.add(10 ,20);
console.log(result2);
