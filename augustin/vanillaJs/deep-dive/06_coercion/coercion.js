var num = 10;

// 명시적 타입 변환(숫자 -> 문자)
var str = num.toString();
console.log(typeof str, str);

// 암묵적 타입 변환(숫자 -> 문자)
var str = num + '';
console.log(typeof str, str);