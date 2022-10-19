# 제어문(control flow statement)
제어문(control flow statement)은 조건에 따라 코드 블록을 실행하거나(조건문), 반복 실행(반목문)할 때 사용된다.  

## 블록문(block statement)
블록문(block statement)이란 0개 이상의 문을 중괄호로 묶은 것이다. 코드 블록 혹은 블록이라고도 부른다.  
자바스크립트는 블록을 하나의 실행 단위로 취급한다. 이러한 블록문은 단독으로도 사용 가능하나, 일반적으로는 제어문이나 함수를 정의할 때 사용한다.  

```javascript
// block
{
    var temp = 20;
}

// 제어문
var condition = 2;

if (condition < 10) {
    condition++;
}

// 함수 선언문
function sum (x, y) {
    return x + y;
}
```

---

## 조건문(conditional statement)
자바스크립트는 if-else 문과 switch 문으로 두 가지 조건문을 제공한다.  

### if-else문
```javascript
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
```
*코드 블럭 내의 문이 하나뿐이라면 중괄호를 생략할 수 있다.*

```javascript
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
console.log(y)
```
*또한, 대부분의 if-else문은 삼항 조건 연산자로 바꿔쓸 수 있다.*

```javascript
var x = 3;
var y;

// if-else 문
if (x < 5)  y = `5보다 작은 수`; // 중괄호 생략
else  y = `5이상의 수`;

// if-else 문 삼항 조건 연산자로의 변환
var z = x < 5 ? `5보다 작은 수` : `5이상의 수`
// if-else if문 삼항 연산자로의 변환
var z = x ? (x < 5 ? `5보다 작은 수~` : `5보다 큰 수~`) : `5인 수~`;
```

### switch문
**switch문은 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 가지는 case문으로 실행 흐름을 옮긴다.**  
case문은 상황(case)을 의미하는 표현식을 지정하는 표현식을 지정하고, 콜론으로 마무리하며, 이후 실행할 문들을 위치시킨다.  

switch문의 표현식과 일치하는 case문이 없다면 실행 순서는 default문으로 이동한다.  
default문은 선택사항으로, 사용할 수도 있고 사용하지 않을 수도 있다.
> **폴스루(fall through)** : 표현식의 평가 결과와 일치한 case문으로 이동하였지만, switch문을 탈출하지 않고 이후의 모든 case문과 default문을 실행하는 현상이다. break문으로 이를 해결한다.

```javascript
var month = 11;
var monthName;

switch (month) {
    case 1 : monthName = 'january';
        break
    case 2 : monthName = 'february';
        break
    case 3 : monthName = 'march';
        break
    case 4 : monthName = 'april';
        break  
    case 5 : monthName = 'may';
        break
    case 6 : monthName = 'june';
        break
    case 7 : monthName = 'july';
        break
    case 8 : monthName = 'august';
        break
    case 9 : monthName = 'september';
        break
    case 10 : monthName = 'october';
        break
    case 11 : monthName = 'november';
        break
    case 12 : monthName = 'december';
        break
    default : monthName = 'invalid month';
}

console.log(monthName)
```
---

## 반복문(loop statement)
반복문(loop statement)은 조건식의 평가 결과가 참인 경우 코드 블록을 반복한다. 조건식의 평가 결과가 거짓일 때까지 반복한다.
### for문
for은 조건식이 거짓으로 평가될때까지 코드 블록을 반복한다
```javascript
// for (변수 선언문 또는 할당문; 조건식; 증감식) {
//     조건문이 참일 때, 반복 실행될 문
// }

for (var i = 0; i < 3; i++) {
    console.log(i);
}
```
for문의 변수 선언문, 조건식, 증감식은 모두 옵션이기 때문에 반드시 사용할 필요는 없다.  
단, 어떤 식도 선언하지 않으면 무한루프가 된다.
```javascript
// 무한루프
for (;;) {

}
```
### while문
반복문(loop statement)은 조건식의 평가 결과가 참인 경우 코드 블록을 반복한다. 
> for문은 반복 횟수가 명확할 때 주로 사용하고,  
> while문은 반복 횟수가 불명확할 때 주로 사용된다.

while문은 조건문의 평가 결과가 거짓이 되면 코드 블럭을 실행하지 않고 종료한다.  
조건식의 평가 결과가 불리언 값이 아니라면, 불리언 값으로 강제 변환하여 논리적 참과 거짓을 구별한다.  
```javascript
var count = 0;

while (count < 3) {
    console.log(count++);
}
```

조건식의 평가 결과가 언제나 참이면 무한루프가 된다
```javascript
// 무한루프
while (true) {

}
```

### do while 문
do while문은 코드 블럭을 먼저 실행하고 조건식을 평가한다. 따라서 코드 블럭은 무조건 한 번 이상 실행된다.
```javascript
var count = 0;

do {
    console.log(count++);
} while (count < 3);
```