// indexOf() : 주어진 값과 일치하는 첫번째 인덱스 반환, 값이 없을 경우 -1 반환
const result = "Hello World".indexOf("World")
console.log(result)
console.log(result !== -1)

// length : 문자열의 길이
const str = "0123"
console.log(str.length)

// slice(start, stop) : 슬라이싱
const str2 = "Hello World!"
console.log(str2.slice(0, 3))

// replace(searchValue, replaceValue) : 문자열 대체
console.log(str2.replace("World", "User"))
console.log(str2.replace("World", ""))

// match() : 정규표현식을 통해 특정한 문자열을 match
const str3 = "2bambitious@gmail.com"
console.log(str3.match(/.+(?=@)/)[0])


// trim() : Python의 strip()과 같은 기능
const str4 = "   Hello World!   "
console.log(str4.trim())