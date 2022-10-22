# Type

## Type-Annotation
**Type-Annotation** : 특정한 객체 등에 타입을 지정해줌
```typescript
let a: number;
a = 39;

function hello(b: number) {
    console.log(b)
}
```

## JavaScript와 TypeScript의 Type의 차이점
### JS의 타입
**JS는 Dynamic Type(동적 타입 언어)**  
자바스크립트에서는 정적 타입 언어와 다르게 변수 선언 시 타입을 선언하지 않는다.  
정적 타입 언어와 다르게, 미리 선언한 데이터 타입의 값만 할당할 수 있는게 아닌, 어떠한 데이터 타입의 값이라도 자유롭게 할당할 수 있다.  
자바스크립트에서는 값을 할당하는 시점에 변수의 타입이 **동적으로 결정되고 변수의 타입을 언제든지 자유롭게 변경할 수 있다**
### TS의 타입
**TS는 Static Type(정적 타입 언어)**  
C나 자바와 같은 정적 타입 언어는 변수를 선언할 때 변수에 할당할 수 있는 데이터 타입을 사전에 선언해야 한다.  
또한, 정적 타입 언어는 변수의 타입을 변경할 수 없으며, 변수에 선언한 타입에 맞는 값만 할당할 수 있다.  
정적 타입 언어는 컴파일 시점에 타입 체크(선언한 데이터 타입에 맞는 값을 할당했는지 검사)를 수행하고, 타입 체크를 통과하지 못하면 프로그램의 실행 자체를 막는다.  
Ex) C, C++, Java, Kotlin, Go, Rust, Scala ...  
TypeScript에서는 JavaScript와 동일한 타입을 지원하며, 추가적으로 개발을 돕기 위해 열거 타입도 제공됨  


# TypeScript의 Type
## Primitive Type(원시 타입)
- object와 reference 형태가 아닌 실제 값을 저장하는 자료형
- boolean
- number
- string
- symbol
- null
- undefined


