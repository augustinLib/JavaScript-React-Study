var num = 1 - '1';
console.log(num, typeof num); // -> 0, number

var num2 = 2 * '10';
console.log(num2, typeof num2); // -> 20, number

var num3 = '6' / 2;
console.log(num3, typeof num3); // -> 3, number

var boolWithNum = '3' > 2;
console.log(boolWithNum, typeof boolWithNum); // -> true, boolean

// Number 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Number('0'), typeof Number('0'));
console.log(Number('-1'), typeof Number('-1'));
console.log(Number('11.23'), typeof Number('11.23'));

console.log(Number(true), typeof Number(true));
console.log(Number(false), typeof Number(false));

// parseInt, parseFloat 함수를 사용하는 방법 (이 경우, 문자열만 숫자 타입으로 변환 가능)
console.log(parseInt('0'), typeof parseInt('0'));
console.log(parseInt('-1'), typeof parseInt('-1'));
console.log(parseFloat('11.23'), typeof parseFloat('11.23'));

// + 단항 산술 연산자를 이용하는 방법
console.log(+ "0", typeof + "0")
console.log(+ "-1", typeof + "-1")
console.log(+ "10.53", typeof + "10.53")

console.log(+ true, typeof + true)
console.log(+ false, typeof + false)

// * 산술 연산자를 이용하는 방법
console.log((1 * "0"), typeof (1 * "0"));
console.log((1 * "-1"), typeof (1 * "-1"));
console.log((1 * "11.23"), typeof (1 * "11.23"));

console.log((1 * true), typeof (1 * true));
console.log((1 * false), typeof (1 * false));
