var person = {
    name : "Lee",   // 프로퍼티(프로퍼티 키 : 프로퍼티 값)
    height : 175,   // 프로퍼티(프로퍼티 키 : 프로퍼티 값)

    call : function () {
        console.log(`my name is ${this.name}`)
    },

    grow : function () {
        this.height++;
    }
};

person.call();
person.grow();
console.log(person.height);

var empty = {};
