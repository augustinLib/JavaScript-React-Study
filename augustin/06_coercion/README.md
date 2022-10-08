# 타입 변환
## 타입 변환
값의 타입은 다른 타입으로 변경될 수 있다.  
의도적으로 값의 타입을 변환하는 것을 명시적 **타입 변환(explicit coercion)** 혹은 **타입 캐스팅(type casting)** 이라 한다  
반대로, 의도와 상관없이 표현식을 평가하는 도중에 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되는 것을 **암묵적 타입 변환(implicit coercion)** 혹은 **타입 강제 변환(type coercion)** 이라고 한다.

```javascript
var num = 10;

// 명시적 타입 변환(숫자 -> 문자)
var str = num.toString();
console.log(typeof str, str);

// 암묵적 타입 변환(숫자 -> 문자)
var str = num + '';
console.log(typeof str, str);
```

>명시적 타입 변환이나 암묵적 타입 변환이 기존 원시 값을 직접 변경하는 것은 아니다.  
>타입 변환은 **기존 원시 값을 이용하여 다른 타입의 새로운 원시 값을 생성**하는 것이다.  

<br>

---

## 암묵적 타입 변환
자바스크립트 엔진은 표현식을 평가할 때 개발자의 의도와는 상관없이 코드의 문맥을 고려하여 암묵적으로 데이터 타입을 강제 변환할 때가 있다.  
```javascript
// 피연산자가 모두 문자열 타입이어야 하는 문맥
var a = '10' + 2;
console.log(a, typeof a); // -> 102, string

// 피연산자가 모두 숫자 타입이어야 하는 문맥
var b = 5 * '10';
console.log(b, typeof b); // -> 50, number

// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
var c = !10;
console.log(c, typeof c); // -> false, boolean
```

암묵적 타입 변환이 발생하면 문자열, 숫자, 불리언과 같은 원시 타입 중 하나로 타입을 자동 변환한다.  

### 문자열 타입으로 변환
아래의 코드를 같이 살펴보자
```javascript
var string = 1 + '2';;
console.log(string, typeof string); // -> 12, string

var string2 = -1 + '';
console.log(string2, typeof string2); // -> -1, string
```

위 코드의 +연산자는 피연산자 중 하나 이상이 문자열이기에 문자열 연결 연산자로 작동한다.  
자바스크립트 엔진은 문자열 연결 연산자 표현식을 평가하기 위해 문자열 연결 연산자의 피연산자 중 문자열 타입이 아닌 피연산자를 문자열 타입으로 암묵적 타입 변환한다.  

### 숫자 타입으로 변환
아래의 코드를 살펴보자
```javascript
var num = 1 - '1';
console.log(num, typeof num); // -> 0, number

var num2 = 2 * '10';
console.log(num2, typeof num2); // -> 20, number

var num3 = '6' / 2;
console.log(num3, typeof num3); // -> 3, number
```
위 코드에서 사용된 연산자 -, *, /는 모두 산술 연산자이다. 산술 연산자의 역할은 숫자 값을 만드는 것이기에 모든 피연산자는 숫자 타입이어야 한다.  
자바스크립트 엔진은 산술 연산자 표현식을 평가하기 위해 산술 연산자의 피연산자 중 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다.  

```javascript
var boolWithNum = '3' > 2;
console.log(boolWithNum, typeof boolWithNum); // -> true, boolean
```
위 코드에서도 암묵적 타입 변환이 이루어진다.  
비교 연산자 >이 사용되었는데, 이는 피연산자의 크기를 비교하기에 위 코드에서는 문맥상 피연산자들이 숫자 타입이어야 한다.  
따라서 자바스크립트 엔진은 비교 연산자의 피연산자 중 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다.  

### 불리언 타입으로 변환
```javascript
var x = 1
if ('') console.log(x);
```
위와 같이 if문이나 for문과 같은 제어문, 혹은 삼항 조건 연산자의 조건식은 불리언 값으로 평가되어야 한다.  
자바스크립트 엔진은 조건식의 평가 결과를 불리언 타입으로 암묵적 타입 변환한다.  
이떼, **자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy값(참으로 평가되는 값)과 Falsy값(거짓으로 평가되는 값)으로 구분한다.**  
Falsy 값은 다음과 같다.
- false
- undefined
- null
- 0, -0
- NaN
- ''(빈 문자열)

아래의 코드를 살펴보자
```javascript
if(!false) console.log(false + " is Falsy value")
if(!undefined) console.log(undefined + " is Falsy value")
if(!null) console.log(null + " is Falsy value")
if(!0) console.log(0 + " is Falsy value")
if(!NaN) console.log(NaN + " is Falsy value")
if(!'') console.log('' + " is Falsy value")
```
Falsy값에 부정연산자 !를 붙임으로써 True값으로 평가되기때문에, 모든 if문이 실행됨을 볼 수 있다.  

---
## 명시적 타입 변환
개발자의 의도에 따라 명시적으로 타입을 변경하는 방법은 아래와 같다.
- 표준 빌트인 생성자 함수(String, Number, Boolean)를 new 연산자 없이 호출
- 빌트인 메서드 사용
- 암묵적 타입 변환을 이용
> 표준 빌트인 생성자 함수와 표준 빌트인 메서드는 자바스크립트에서 기본 제공하는 함수이다.  
> **표준 빌트인 생성자 함수는 객체를 생성하기 위한 함수이며, new 연산자와 함께 호출한다.**  
> **표준 빌트인 메서드는 자바스크립트에서 기본 제공하는 빌트인 객체의 메서드다**

### 문자열 타입으로 변환
문자열 타입이 아닌 값을 문자열 타입으로 변환하는 방법은 아래와 같다.
- String 생성자 함수를 new 연산자 없이 호출
- Object.prototype.toString 메서드 이용
- 문자열 연결 연산자 이용

```javascript
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
```

### 숫자 타입으로 변환
숫자 타입이 아닌 값을 숫자 타입으로 변환하는 방법은 다음과 같다
- Number 생성자 함수를 new 연산자 없이 호출하는 방법
- parseInt, parseFloat 함수를 사용하는 방법 (이 경우, 문자열만 숫자 타입으로 변환 가능)
- \+ 단항 산술 연산자를 이용하는 방법
- \* 산술 연산자를 이용하는 방법
```javascript
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
```

### 불리언 타입으로 변환
불리언 타입이 아닌 값을 불리언 타입으로 변환하는 방법은 다음과 같다
- Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
- ! 부정 논리 연산자를 두 번 사용하는 방법
```javascript
// Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Boolean('x'), typeof Boolean('x'));
console.log(Boolean(''), typeof Boolean('')); // ''(빈 문자열)은 Falsy 값
console.log(Boolean('false'), typeof Boolean('false'));

console.log(Boolean(0), typeof Boolean(0)); // 0은 Falsy 값
console.log(Boolean(1), typeof Boolean(1));
console.log(Boolean(NaN), typeof Boolean(NaN)); // NaN은 Falsy 값
console.log(Boolean(Infinity), typeof Boolean(Infinity));
console.log(Boolean(null), typeof Boolean(null)); // null은 Falsy 값
console.log(Boolean(undefined), typeof Boolean(undefined)); // undefined는 Falsy값
console.log(Boolean({}), typeof Boolean({}));
console.log(Boolean([]), typeof Boolean([]));

// ! 부정 논리 연산자를 두 번 사용하는 방법
console.log(!!('x'), typeof !!('x'));
console.log(!!(''), typeof !!('')); // ''(빈 문자열)은 Falsy 값
console.log(!!('false'), typeof !!('false'));

console.log(!!(0), typeof !!(0)); // 0은 Falsy 값
console.log(!!(1), typeof !!(1));
console.log(!!(NaN), typeof !!(NaN)); // NaN은 Falsy 값
console.log(!!(Infinity), typeof !!(Infinity));
console.log(!!(null), typeof !!(null)); // null은 Falsy 값
console.log(!!(undefined), typeof !!(undefined)); // undefined는 Falsy값
console.log(!!({}), typeof !!({}));
console.log(!!([]), typeof !!([]));
```