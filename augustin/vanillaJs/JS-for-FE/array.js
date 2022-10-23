const numbers = [1, 2, 3, 4]
const fruits = ["Apple", "Banana", "Cherry"]

console.log(numbers[1])
console.log(fruits[2])


// length
console.log(numbers.length)

// find() 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환, 만족하는 요소가 없으면 undefined 반환
const array1 = [4, 6, 2, 11, 43]
const found = array1.find(x => x > 10)
console.log(found)

// concat : 두 배열 변환, 원본 데이터는 손상되지 않음
const concats = numbers.concat(fruits)
console.log(concats)


// forEach() : 메소드가 붙어있는 배열 데이터의 item 개수만큼 인수로 사용된 callback 함수가 반복적으로 실행됨
fruits.forEach(function (element, index, array) {
    console.log(element, index, array)
})

fruits.forEach(function (fruit, index) {
    console.log(`${fruit}-${index}`)
})


// map() : callback에서 반환된 데이터를 바탕으로 데이터들의 모음인 새로운 배열을 반환함
// 원본을 건드리지 않고 새로운 배열을 반환한다
const b = fruits.map(function (fruit, index) {
    return {
        id: index,
        name: fruit
    }
})
console.log(b)
console.log(b[1])

// filter
// 원본을 건드리지 않고 새로운 배열을 반환한다
const c = numbers.filter(number => {
    return number < 3
})
console.log(c)

// find(), findIndex()
const a = fruits.find(fruit => {
    return /^C/.test(fruit)
})
console.log(a)


const d = fruits.findIndex(fruit => {
    return /^C/.test(fruit)
})
console.log(d)

// include
const e = numbers.includes(3)
console.log(e)
const f = numbers.includes(5)
console.log(f)

// push(), unshift()
// 원본이 수정된다
console.log(numbers)

numbers.push(5)
console.log(numbers)

numbers.unshift(0)
console.log(numbers)

// reverse()
// 원본이 수정된다
numbers.reverse()
console.log(numbers)

fruits.reverse()
console.log(fruits)

// splice(start, deleteCount) : start index부터 deleteCount만큼 지운다
// deleteCount 뒤에는 제거한 자리에 추가할 요소를 적어줄 수 있다.
// 특정 위치에 요소를 집어넣는 방법으로 사용 가능
// 원본이 수정된다
numbers.reverse()
numbers.splice(2, 1)
console.log(numbers)

numbers.splice(2, 0, 3)
console.log(numbers)