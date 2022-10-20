var key = Symbol('key')
console.log(typeof key) // symbol 타입

// 객체 생성
var object = {}

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 객체의 프로퍼티 키로 사용한다.
object[key] = 'only value'
console.log(object[key])
