// 리터럴 표현식
180;
'height';

// 식별자 표현식 예시를 위한 사전 선언
var sum = 10 + 20;
let arr = ["사과", "오렌지", "자두"];
class Person {

    constructor(name) {
      this.name = name;
    }
  
    attendence() {
      console.log(this.name);
    }
  
}
let person =new Person("lee")

// 식별자 표현식
sum;
person.name
arr[1]

// 연산자 표현식 (+리터럴)
10 + 20
sum = 10
sum !== 10


// 함수, 메소드 호출 표현식 예시를 위한 사전 선언
function notice() {
    return "warning!" 
}

// 함수, 메소드 호출 표현식
notice()
person.attendence()