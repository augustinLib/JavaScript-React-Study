const pi = 3.1415626535
console.log(pi)

// toFixed() : 인수로 받는 number형 값의 자릿수까지만 표기한 문자열 값 반환
const str = pi.toFixed(2)
console.log(str)
console.log(typeof str)

// parseInt, parseFloat는 문자열만 사용 가능
const integer = parseInt(str)
const float = parseFloat(str)
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)

// math
console.log(Math.abs(-23))


