// 피연산자가 모두 문자열 타입이어야 하는 문맥
var a = '10' + 2;
console.log(a, typeof a); // -> 102, string

// 피연산자가 모두 숫자 타입이어야 하는 문맥
var b = 5 * '10';
console.log(b, typeof b); // -> 50, number

// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
var c = !10;
console.log(c, typeof c); // -> false, boolean

