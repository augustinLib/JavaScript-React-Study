var string = 1 + '2';;
console.log(string, typeof string); // -> 12, string

var string2 = -1 + '';
console.log(string2, typeof string2); // -> -1, string


// String 생성자 함수를 new 연산자 없이 호출
console.log(String(1), typeof String(1));
console.log(String(NaN), typeof String(NaN));
console.log(String(Infinity), typeof String(Infinity));

console.log(String(true), typeof String(true));
console.log(String(false), typeof String(false));

// Object.prototype.toString 메서드 사용
console.log((1).toString(), typeof (1).toString());
console.log((NaN).toString(), typeof (NaN).toString());
console.log((Infinity).toString(), typeof (Infinity).toString());

console.log((true).toString(), typeof (true).toString());
console.log((false).toString(), typeof (false).toString());

// 문자열 연결 연산자를 이용하는 방법
var string = -1 + '';
console.log(string, typeof string); // -> -1, string
