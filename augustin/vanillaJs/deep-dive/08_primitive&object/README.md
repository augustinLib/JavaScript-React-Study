# 원시 값과 객체의 비교
자바스크립트가 제공하는 7가지 타입은 다음과 같다.
- number
- string
- boolean
- null
- undefined
- symbol
- object

이는 크게 원시 타입(primitive type)과 객체 타입(object type)으로 구분할 수 있다.  
원시 타입과 객체 타입은 다음과 같은 차이점이 있다.
- 원시 타입의 값은 변경 불가능한 값(immutable value)이다. 이에 비해 객체 타입의 값은 변경 가능한 값(mutable value)이다. 
- 원시 값을 변수에 할당하면 변수(확보된 메모리 공간)에는 실제 값이 저장된다. 이에 비해 객체를 변수에 할당하면 변수에는 참조 값이 저장된다.
- 원시 값을 갖는 변수를 다른 변수에 할당하면 원본의 원시 값이 **복사되어 저장된다** 이를 값에 의한 전달(pass by value)라고 한다.
- 객체를 가리키는 변수를 다른 변수에 할당하면 **원본의 참조 값이 복사**되어 전달된다. 이를 참조에 의한 전달(pass by reference)라고 한다.

## 원시 값
원시 타입(primitive type)의 값, 원시 값은 변경 불가능한 값(immutable value)이다.  
즉, 한번 생성된 원시 값은 읽기 전용(read only)로서 변경할 수 없다.  
이때, 변경 불가능하다는 것은 변수가 아니라 값에 대한 의미로, 원시 값 자체를 변경할 수 없다는 것이지 변수 값은 재할당을 통해 변경할 수 있다.  
다만, `const` 키워드를 통해 선언된 변수는 상수이기 때문에 재할당이 금지된다.
> 정리하자면, 원시 값은 변경 불가능한 값(immutable value)이며, 읽기 전용 값이다. 원시 값은 어떤 일이 있어도 불변하며, 이러한 특성은 데이터의 신뢰성을 보장한다.

### 변수에서 원시 값을 재할당할 때 벌어지는 일
원시 값은 변경 불가능한 값이기 때문에 값을 직접 변경할 수 없다. 따라서 변수 값을 변경하기 위해 원시 값을 재할당하면   
새로운 메모리 공간을 확보하고, 재할당한 값을 저장한 이후, 변수가 참조하던 메모리 공간의 주소를 변경한다. 이러한 특성을 **불변성(immutability)** 라고 한다.  
불변성을 가지는 원시 값을 할당한 변수는 재할당 이외에 변수 값을 변경할 수 있는 방법이 없다. 

### 문자열과 불변성
문자열 또한 원시 타입이기 때문에, 변경 불가능하다. 이를 확인해보기 위해 문자열의 한 문자를 변경해보겠다.  
문자열은 **유사 배열 객체**이면서 iterable하기 때문에 배열과 유사하게 각 문자에 접근할 수 있다.
> **유사 배열 객체** : 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고, length 프로퍼티를 가지는 객체를 말한다.
> 문자열의 경우 배열처럼 인덱스를 통해 각 문자에 접근할 수 있으며, length 프로퍼티를 갖기 때문에 유사 배열 객체이며 for문으로도 순회할 수 있다.
```javascript
var str = "string";

// 문자열은 유사 배열 객체이기에 인덱스로 각 문자에 접근 가능
console.log(str[0]);

// 원시 값인 문자열이 객체처럼 동작
console.log(str.length);
console.log(str.toUpperCase())
```
```javascript
var str = "string";

// 문자열은 유사 배열 객체이기에 인덱스로 각 문자에 접근 가능
str[0] = "S";

console.log(str); // -> string
```
`str[0] = "S"`처럼 이미 생성된 문자열의 일부 문자를 변경해도 반영되지 않음을 확인할 수 있다.  
그러나, 변수에 새로운 문자열을 재할당하는 것은 가능한데, 이는 기존 문자열을 변경하는 것이 아닌, 새로운 문자열을 새롭게 할당하는 것이다.  

### 값에 의한 전달(pass-by-value)
예제와 함께 살펴보자
```javascript
var score = 80;
var copy = score;

console.log(score); // 80
console.log(copy);  // 80

score = 100;

console.log(score); // 100
console.log(copy);  // 80
```
score 변수에 숫자 값 80을 할당하고, copy 변수에 score 변수를 할당하였다.  
이처럼 변수에 변수를 할당하면 변수의 값이 전달된다.  
즉, `copy = score`에서 `score`는 변수 값 80으로 평가되기 때문에 `copy`변수에도 80이 할당된다.  
이때, 새로운 숫자 값 80이 생성되어서 `copy`변수에 할당된다.

**이처럼 변수에 원시 값을 갖는 변수를 할당하면 변수에는 할당되는 변수의 원시 값이 복사되어 전달된다.**  
이를 **값에 의한 전달**이라고 한다. 위 예제에서는 `copy` 변수에 원시 값을 갖는 `score` 변수를 할당하면 할당받는 변수에는 할당되는 변수의
원시 값 80이 복사되어 전달된다.  
```javascript
var score = 80;
var copy = score;

console.log(score, copy); // 80, 80
console.log(score === copy); // true
```
이 때, `score`변수와 `copy`변수는 숫자 값 80을 갖는다는 점에서 동일하다. 하지만 두 변수의 값 80은  
**서로 다른 메모리 공간에 저장된 별개의 값임을 유의해야 한다.**  
즉, `score`변수의 값을 변경해도 `copy`변수의 값에는 어떠한 영향도 주지 않는다.  

> 파이썬의 경우, 처음에는 두 변수가 값은 메모리 공간에 저장되다가, 한쪽의 변수에 재할당이 일어나면 새로운 메모리 공간으로 분리된다.  
> 아래의 파이썬 예제를 살펴보자  
> ```python
> score = 80
> copy = score
> print(score, copy)  # 80, 80
> print(id(score), id(copy))  # 4306610928, 4306610928
> 
> score = 100
> print(score, copy)  # 100, 80
> print(id(score), id(copy))  # 4306611568, 4306610928
> ```
그런데, 변수와 같은 식별자는 메모리 공간에 저장되어 있는 어떤 값을 구별해서 식별해내는 것으로, 값이 아닌 메모리 주소를 기억하고 있다.  
즉, 
```javascript
var x = 10;
```
위의 예제에서 식별자(변수) x는 숫자 값 10을 담고있는게 아닌, 숫자 값 10이 저장된 메모리 공간의 주소를 전달한다.  
다만, x가 전달한 메모리 주소를 통해 값을 참조하고, 해당 참조된 값으로 평가되는 것이다.  
> 즉, **값에 의한 전달도 사실 값을 전달하는 것이 아닌, 메모리 주소를 반환한다.   
> 단, 전달된 메모리 주소를 통해 메모리 공간에 접근하면 값을 참조할 수 있다.**  

# 객체
객체는 프로퍼티의 개수가 정해져 있지 않으며, 동적으로 추가되고 삭제될 수 있다. 또한 프로퍼티의 값에도 제약이 없다.  
**따라서, 객체는 원시 값과 같이 확보해야 할 메모리 공간의 크기를 사전에 정해 둘 수 없다.**  

원시 값은 상대적으로 작은 메모리를 소비하지만, 객체는 경우에 따라 크기가 매우 클 수도 있다. 
따라서, 객체는 원시 값과는 다른 방식으로 동작한다.  

### 자바스크립트 객체의 관리 방식
자바스크립트 객체는 프로퍼티 키를 인덱스로 사용하는 해시 테이블(hash table)이라고 생각할 수 있다.  
Java, C++과 같은 클래스 기반 객체지향 프로그래밍 언어는 사전에 정의된 클래스를 기반으로 객체(인스턴스)를 생성한다.  

즉, 객체를 생성하기 전에 이미 프로퍼티와 메서드가 정해져 있으며, 그대로 객체를 정의한다.  
객체가 생성된 이후에는 프로퍼티나 메서드를 삭제하거나 추가할 수 없다.
하지만, 자바스크립트는 클래스 없이 객체를 생성할 수 있으며, 객체가 생성된 이후에도 동적으로 프로퍼티와 메서드를 추가할 수 있다.  

이러한 특징은 사용하기 매우 편리하지만,  
**성능 면에서는 이론적으로 클래스 기반 객체지향 프로그래밍 언어의 객체보다 생성과 프로퍼티 접근에 비용이 더 많이 드는 비효율적인 방식이다.**

## 변경 가능한 값
객체(참조) 타입의 값, 즉, 객체는 변경 가능한 값(mutable value)이다.  
먼저, 변수에 객체를 할당하면 어떤 일이 일어나는지 예제와 함께 살펴보자.  
```javascript
var person = {
    name: "Lee"
};
```
원시 값을 할당한 변수가 기억하는 메모리 주소를 통해 메모리 공간에 접근하면 원시 값에 접근할 수 있다.  
즉, 원시 값을 할당한 변수는 원시 값 자체를 값으로 갖는다.  
하지만 객체를 할당한 변수가 기억하는 메모리 주소를 통해 메모리 공간에 접근하면 **참조 값(reference value)**에 접근할 수 있다.  
참조 값은 생성된 객체가 저장된 메모리 공간의 주소 그 자체이다.
```javascript
// 할당이 이뤄지는 시점에 객체 리터럴이 해석되고, 그 결과 객체가 생성된다.
var person = {
    name: "Lee"
};

// person 변수에 저장되어 있는 참조 값으로 실제 객체에 접근한다.
console.log(person)
```
객체를 할당한 변수의 경우 "변수는 객체를 참조하고 있다" 또는 "변수는 객체를 가리키고 있다" 라고 표현한다.  
> 원시 값은 변경 불가능한 값이므로 원시 값을 갖는 변수의 값을 변경하려면 재할당 외에는 방법이 없다.  
> 하지만, 객체는 변경 가능한 값이다. 따라서 객체를 할당한 변수는 재할당 없이 객체를 직접 변경할 수 있다.  
> **즉, 재할당 없이 프로퍼티를 동적으로 추가할 수도 있고, 프로퍼티 값을 갱신할 수도 있으며, 프로퍼티 자체를 삭제할 수도 있다.**

```javascript
var person = {
    name: "Lee"
};

// 프로퍼티 값 갱신
person.name = "Kim";

// 프로퍼티 동적 생성
person.adderss = "Seoul";
```
원시 값은 변경 불가능한 값이므로 원시 값을 갖는 변수의 값을 변경하려면 재할당을 통해 메모리에 원시 값을 새롭게 생성해야 한다.  
하지만 객체는 변경 가능한 값이므로 메모리에 메모리에 저장된 객체를 직접 수정할 수 있다.  
**이때 객체를 할당한 변수에 재할당을 하지 않았으므로 객체를 할당한 변수의 참조 값은 변경되지 않는다.**  

객체를 생성하고 관리하는 방식은 매우 복잡하며, 비용이 많이 드는 일이다.  
객체를 변경할 때마다 원시 값처럼 이전 값을 복사해서 새롭게 생성한다면 명확하고 신뢰성이 많이 확보되겠지만 객체는 크기가 매우 클 수도 있고, 
원시 값처럼 크기가 일정하지도 않으며, 프로퍼티 값이 객체일 수도 있어서 복사(deep copy)해서 생성하는 비용이 많이 든다.  
다시 말해, **메모리의 효율적 소비가 어렵고 성능이 나빠진다.**  

따라서, 메모리를 효율적으로 사용하기 위해, 또한 객체를 복사해 생성하는 비용을 절약하여 성능을 향상시키기 위해 객체는 변경 가능한 값으로 설계되어 있다.  
메모리 사용의 효율성과 성능을 위해 어느 정도의 구조적인 단점을 감안한 설계라고 할 수 있다. 
객체는 이러한 구조적 단점에 따른 부작용이 있다.  
그것은 **원시 값과는 다르게 여러 개의 식별자가 하나의 객체를 공유할 수 있다는 것이다.**  

