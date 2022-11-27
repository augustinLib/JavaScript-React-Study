var person = {
};

var key = "name"

person[key] = "Lee"
console.log(person)


// 프로퍼티 값 접근
var person = {
    name : 'Lee'
};

// 마침표 표기법
console.log(person.name);

// 대괄호 표기법
console.log(person['name']);

// 프로퍼티 값 갱신
var person = {
    name: "Lee"
};

// person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다
person.name = "Kim"

console.log(person.name)

// 프로퍼티 동적 생성
var person = {
    name: "Lee"
};

// 존재하지 않는 프로퍼티인 age를 할당함으로, age 프로퍼티가 동적으로 생성되고 값이 할당된다
person.age = 20;

console.log(person)

// 프로퍼티 삭제
var person = {
    name: "Lee"
};

// 프로퍼티 동적 생성
person.age = 20;

// delete로 프로퍼티 삭제
delete person.name
console.log(person)