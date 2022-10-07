# 타입 변환과 단축 평가
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
var string = 1 + '2'
console.log(string, typeof string) // -> 12, string
```

위 코드의 +연산자는 피연산자 중 하나 이상이 문자열이기에