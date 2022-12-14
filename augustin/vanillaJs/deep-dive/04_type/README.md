# 데이터 타입

## 데이터 타입(data type)
데이터 타입(data type)이란 값의 종류를 말한다

|   구분   |  데이터 타입   |    설명     | 
|:---------:|:------------------:|:----------------------:|
| 원시 타입  |   숫자(number)    |    숫자, 정수와 실수 구분 없이 하나의 숫자 타입만 존재     |
| 원시 타입  |   문자열(string)    |    문자열     |
| 원시 타입  |   불리언(boolean)    |    논리적 참(true)과 거짓(false)     |
| 원시 타입  |   undefined    |    var 키워드로 선언된 변수에 암묵적으로 할당되는 값     |
| 원시 타입  |   null    |    값이 없다는 것을 의도적으로 명시할 때 사용하는 값     |
| 원시 타입  |   심벌(symbol)    |   ES6에서 추가된 7번째 타입      |
| 객체 타입  |     |  객체, 함수, 배열 등      |

---

## 숫자 타입
자바스크립트의 경우, 하나의 숫자 타입만 존재한다.  
이러한 특징은 정수와 실수를 구분하여 int, float, double 등과 같은 다양한 숫자 타입을 제공하는 타 언어와의 차별점이다.  
**자바스크립트에서는 모든 수를 실수로 처리하며(64비트 부동소수점 형식), 정수만 표현하기 위한 별도의 타입은 존재하지 않는다.**  

```javascript
// 아래의 변수들은 모두 숫자 타입
var a = 10;
var b = 11.1111;
var c = -10;
```
정수, 실수, 2진수, 8진수, 16진수 리터럴은 모두 메모리에 64비트 부동소수점 형식의 2진수로 저장된다.  
**또한, 자바스크립트는 2진수 ,8진수, 16진수를 표현하기 위한 데이터 타입을 제공하지 않기 때문에 값을 참조하면 모두 10진수로 해석된다**

```javascript
// 아래의 변수들은 모두 숫자 타입
var binary = 0b01000001;
var oct = 0o101;
var hex = 0x41;

// 표기법만 다를 뿐 모두 같은 값이다(65)
console.log(binary);
console.log(oct);
console.log(hex);
console.log(binary == oct);
console.log(oct == hex);
```

추가적으로, 숫자 타입은 세 가지의 특별한 값도 표현할 수 있다.
- Infinity : 양의 무한대
- -Infinity : 음의 무한대
- NaN : 산술 연산 불가(Not-a-Number)
  
```javascript
console.log(10/0;           // Infinity
console.log(10/-0);         // -Infinity
console.log(1 * 'string');  // NaN
```

---


## 문자열 타입
문자열(string)타입은 텍스트 데이터를 나타내는 데 사용한다.  
문자열의 경우, 작은따옴표(''), 큰따옴표(""), 백틱(``)으로 텍스트를 감싼다.  

자바스크립트에서 문자열은 **원시 타입**이다.  
이는 배열로 문자열을 표현하는 C와, 객체로 문자열을 표현하는 자바와 다른 점이다.  
<br>

## 템플릿 리터럴
템플릿 리터럴(template literal)이란, ES6부터 도입된 새로운 문자열 표기법이다.  
템플릿 리터럴은 멀티라인 문자열, 표현식 삽입, 태그드 템플릿 등 다양한 문자열 처리 기능을 제공하며,  
런타임에 일반 문자열로 변환되어 처리된다.  

```javascript
var template = `Template literal`;
console.log(template);
```
그렇다면, 템플릿 리터럴에서 제공하는 멀티라인 문자열, 표현식 삽입, 태그드 템플릿이란 과연 무엇일까?

### 멀티라인 문자열
우선, 자바스크립트의 일반 문자열(큰따옴표, 혹은 작은따옴표로 감싸진 문자열)에서는 줄바꿈(개행)이 허용되지 않는다.  
따라서, 일반 문자열 내에서 줄바꿈 등의 공백을 표현하려면 이스케이프 시퀀스를 사용해야만 한다.  
<br>
일반 문자열과 달리, 템플릿 리터럴은 이스케이프 시퀀스를 사용하지 않고도 줄바꿈을 허용하며, 모든 공백도 있는 그대로 적용된다.

### 표현식 삽입
문자열은 문자열 연산자 +를 통해 연결할 수 있다.  
연산자 +는 피연산자 중 하나 이상이 문자열인 경우, 문자열 연결 연산자로 동작하며, 그 외에는 덧셈 연산자로 작용한다.  
```javascript
var first = 'augustin';
var last = 'Lee';

console.log('My name is ' + first + ' ' + last);
```
템플릿 리터럴 내부에서는 표현식 삽입을 통해 문자열을 삽입할 수 있다.(파이썬의 문자열 포매팅과 비슷)  
```javascript
// 템플릿 리터럴 내에서의 표현식 삽입
var first = `augustin`;
var last = `Lee`;

console.log(`My name is ${first} ${last}.`); // 파이썬의 문자열 포매팅과 비슷함
```
또한, ${}내부에 삽입된 표현식의 평가 결과가 문자열이 아니어도 문자열로 타입이 강제 변환되어 삽입된다.
```javascript
// 템플릿 리터럴 내에서의 표현식 삽입
console.log(`1 + 2 = ${1+2}`);
```

---

## 불리언 타입
불리언 타입은 논리적인 참과 거짓을 나타내는 타입으로, true와 false로 구성된다.

---

## undefined 타입
undefined 타입의 값은 undefined가 유일하다.  
var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화된다.  
따라서, var 키워드로 변수를 선언한 이후 값을 할당하지 않은 변수를 참조하면 undefined가 반환된다.  

```javascript
var temp;
console.log(temp) // undefined 반환
```

---
## null 타입
null 타입의 값은 null이 유일하다.  
**자바스크립트는 대소문자를 구분하기 때문에 null은 Null, NULL등과 다름에 주의해야한다.**  
프로그래밍 언어에서 null은 변수에 값이 없다는 것을 **의도적으로 명시**할 때 사용한다.  
변수에 null을 할당하는 것은 변수가 이전에 참조하던 값을 더 이상 참조하지 않겠다는 의미이다.  
즉, 이전에 변수에 할당되어 있던 값에 대한 참조를 명시적으로 제거하는 것을 의미하며, 이후 자바스크립트 엔진이 어떠한 변수도 참조하지 않는 메모리에 대해 가비지 콜렉션을 수행한다.  
<br>
이 밖에도, 함수가 유효한 값을 반환할 수 없을 때 명시적으로 null을 반환하기도 한다.

--- 

## 심벌(symbol) 타입
심벌(symbol)은 ES6에서 추가된 7번째 타입이며, 변경 불가능한 원시 타입의 값이다.  
또한, **심벌 값은 다른 값과 중복되지 않는 유일무이한 값이다.**  
따라서, 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다.  
심벌은 다른 원시 값들과 다르게 리터럴을 통해 생성되지 않고 Symbol함수를 호출하여 생성한다.
```javascript
var key = Symbol('key')
console.log(typeof key) // symbol 타입

// 객체 생성
var object = {}

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 객체의 프로퍼티 키로 사용한다.
object[key] = 'only value'
console.log(object[key])
```

---

## 데이터 타입의 필요성
- 값을 저장할 때 확보해야 하는 메모리 공간의 크기를 결정할 때 데이터 타입이 필요함
- 값을 참조할 때 한번에 읽어들어야 할 메모리 공간의 크기를 결정하기 위해 데이터 타입이 필요함
- 메모리에서 읽어들인 2진수를 어떻게 해석할지 결정하기 위해 데이터 타입이 필요함

## 동적 타이핑
### 정적 타입 언어
C나 자바와 같은 정적 타입 언어는 변수를 선언할 때 변수에 할당할 수 있는 데이터 타입을 사전에 선언해야 한다.  
또한, 정적 타입 언어는 변수의 타입을 변경할 수 없으며, 변수에 선언한 타입에 맞는 값만 할당할 수 있다.  
정적 타입 언어는 컴파일 시점에 타입 체크(선언한 데이터 타입에 맞는 값을 할당했는지 검사)를 수행하고, 타입 체크를 통과하지 못하면 프로그램의 실행 자체를 막는다.  
Ex) C, C++, Java, Kotlin, Go, Rust, Scala ...  
<br>

### 자바스크립트에서의 변수 선언(동적 타입 언어)
자바스크립트에서는 정적 타입 언어와 다르게 변수 선언 시 타입을 선언하지 않는다.  
정적 타입 언어와 다르게, 미리 선언한 데이터 타입의 값만 할당할 수 있는게 아닌, 어떠한 데이터 타입의 값이라도 자유롭게 할당할 수 있다.  
자바스크립트에서는 값을 할당하는 시점에 변수의 타입이 **동적으로 결정되고 변수의 타입을 언제든지 자유롭게 변경할 수 있다**
> 즉, 자바스크립트의 변수는 **선언이 아닌 할당에 의해 타입이 결정(타입 추론,Type inference)되며,**  
> **재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다.**  
> **이러한 특징을 가진 언어를 동적 타입 언어라고 한다**
Ex) JavaScript, Python, Ruby ...  
