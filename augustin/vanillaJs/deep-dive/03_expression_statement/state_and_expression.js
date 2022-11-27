// 변수 선언문은 값으로 평가될 수 없기에 표현식이 아닌 문
var height;

// 180은 표현식(리터럴)이기에 표현식인 문이다.
var height = 180;
// 10+20은 표현식이기에 표현식인 문이다.
var sum = 10 + 20;



// 변수 선언문은 표현식이 아닌 문이기에 값처럼 사용할 수 없다.
// var person = var height; -> error

// 표현식인 문은 값처럼 사용할 수 있다.
var weight = kg = 60;
console.log(weight); // 60