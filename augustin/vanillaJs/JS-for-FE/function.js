function sum(x, y) {
    console.log(x + y)
}

sum(1, 3)

// 화살표 함수
// () => {} vs function () {}

const double = function (x) {
    return x * 2
}

console.log("double: ", double(7))

const doubleArrow = (x) => {
    return x * 2
}

console.log("doubleArrow", doubleArrow(7))

// 화살표 함수와 일반 함수의 차이점
// 화살표 함수는 표현식을 축약할 수 있다. (return, {} 생략 가능)

const doubleArrow2 = (x) => x * 2
console.log("doubleArrow2", doubleArrow2(7))

// parameter가 하나면 ()도 생략 가능
const doubleArrow3 = x => x * 2
console.log("doubleArrow3", doubleArrow3(7))

// 객체 데이터를 축약형의 화살표 함수로 반환할 때에는 객체의 중괄호를 소괄호로 감싸줘야함
const doubleArrow4 = x => ({
    name : "Lee"
})
console.log("doubleArrow4", doubleArrow4(7));

// 즉시실행함수
// IIFE : Immediately-Invoked Function Expression
const a = 7;

// 익명의 함수를 소괄호 안에 넣어줌
// 방법 1
(function () {
    console.log(a*2)
})();

// 방법 2
(function () {
    console.log(a*2)
}());

// 타이머 함수
// SetTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종


// const timer = setTimeout(() => {
//     console.log("hi")
// }, 3000)
//
// const h1El = document.querySelector("h1")
// h1El.addEventListener("click", () => {
//     clearTimeout(timer)
// })


const timer = setInterval(() => {
    console.log("hi")
}, 3000)

const h1El = document.querySelector("h1")
h1El.addEventListener("click", () => {
    clearInterval(timer)
})

// 콜백(callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)
// 여기서 setTimeout의 인수로 사용된 함수는 callback 함수

function timeOut(callback) {
    setTimeout(() => {
        console.log("Hi")
        callback()
    }, 3000)
}
timeOut(() => {
    console.log("Done")
})
