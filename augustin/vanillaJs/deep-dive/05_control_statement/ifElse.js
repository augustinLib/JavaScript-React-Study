var x = 3;
var y;

// if문
if (x < 5) {
    y = `5보다 작은 수`;
}
console.log(y)


// if-else 문
if (x < 5) {
    y = `5보다 작은 수`;
} else {
    y = `5이상의 수`;
}
console.log(y)

// if-else if 문
if (x < 5) {
    y = `5보다 작은 수`;
} else if (x > 5) {
    y = `5보다 큰 수`;
} else {
    y = `5인 수`;
}
console.log(y)


var x = 3;
var y;

// if문
if (x < 5) y = `5보다 작은 수`; // 중괄호 생략
console.log(y)

// if-else 문
if (x < 5)  y = `5보다 작은 수`; // 중괄호 생략
else  y = `5이상의 수`;
console.log(y)

// if-else if 문
if (x < 5)  y = `5보다 작은 수`;
else if (x > 5) y = `5보다 큰 수`; // 중괄호 생략
else y = `5인 수`;
console.log(y);

// if-else문 삼항 연산자로의 변환
var z = x < 5 ? `5보다 작은 수!` : `5이상의 수!`;
console.log(z);

// if-else if문 삼항 연산자로의 변환
var z = x ? (x < 5 ? `5보다 작은 수~` : `5보다 큰 수~`) : `5인 수~`;
console.log(z)