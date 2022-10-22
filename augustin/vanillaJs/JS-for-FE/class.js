function User(first, last) {
    this.firstName = first
    this.lastName = last
 }

 // prototype
// 이름과 같은 부분은 유저마다 다르기에 메모리를 통일해서 관리하기 힘들지만
// getfullname은 로직이 같기 때문에 통일해서 메모리를 관리
// 이렇게 prototype으로 만들어진 getFullName은 메모리에 딱 한번만 만들어짐

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
 }



 const augustin = new User("augustin", "Lee")

console.log(augustin)
console.log(augustin.getFullName())


// ES6에서의 class
class User2 {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
    // prototype으로 만들어진 method와 동일
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const newUser = new User2("augustin", "Lee")
console.log(newUser)
console.log(newUser.getFullName())

// 상속
class  Vehicle {
    constructor(name, wheel) {
        this.name = name
        this.wheel = wheel
    }
}

const myVehicle = new Vehicle("운송수단", 2)
console.log(myVehicle)

// extend : 상속
class Bicycle extends Vehicle {
    constructor(name, wheel) {
        super(name, wheel);

    }
}

const myBicycle = new Bicycle('삼천리', 2)
console.log(myBicycle)

class Car extends Vehicle {
    constructor(name, wheel, license) {
        super(name, wheel);
        this.license = license
    }
}

const myCar = new Car("벤츠", 4, true)
console.log(myCar)