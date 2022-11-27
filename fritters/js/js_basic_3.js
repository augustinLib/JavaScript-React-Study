// ## Prototype and Class

// ### Object Generator
// - object generator makes a new object with function
// - OG must start with capital letter

// ```
// function Animal(type, name, sound){
//     this.type = type;
//     this.name = name;
//     this.sound = sound;
//     this.say = function() {
//         console.log(this.sound);
//     };
// }

// const dog = new Animal('dog', 'doggy', 'brrr')
// const cat = new Animal('cat', 'kitty', 'meow')

// dog.say()
// cat.say()
// ```

// ### Prototype
// - below OG m `.prototype.[key you want] = `

// ```
// function Animal(type, name, sound) {
//     this.type = type;
//     this.name = name;
//     this.sound = sound;
//   }

// Animal.prototype.say = function(){
//     console.log(this.sound);
// };
// Animal.prototype.sharedValue = 1;

// const dog = new Animal('dog', 'doggy', 'brrr');
// const cat = new Animal('cat', 'kitty', 'meow');

// dog.say();
// cat.say();

// console.log(dog.sharedValue);
// console.log(cat.sharedValue);
// ```
// ### Succeding OG

// ```
// function Animal(type, name, sound) {
//     this.type = type;
//     this.name = name;
//     this.sound = sound;
//   }
  
// Animal.prototype.say = function() {
// console.log(this.sound);
// };
// Animal.prototype.sharedValue = 1;

// function Dog(name, sound) {
//     Animal.call(this, 'doggy', name, sound);
// }
// Dog.prototype = Animal.prototype;

// function Cat(name, sound) {
//     Animal.call(this, 'kitty', name, sound);
// }
// Cat.prototype = Animal.prototype;
  
// const dog = new Dog('멍멍이', '멍멍');
// const cat = new Cat('야옹이', '야옹');

// dog.say();
// cat.say();
// ```

// ## Class 

// ```
// class Animal {
//     constructor(type, name, sound) {
//         this.type = type;
//         this.name = name;
//         this.sound = sound;
//     }
//     say() {
//         console.log(this.sound);
//     }
// }

// class Dog extends Animal {
//     constructor(name, sound) {
//         super('dog', name, sound);
//     }
// }

// class Cat extends Animal {
//     constructor(name, sound) {
//         super('cat', name, sound);
//     }
// }

// const dog = new Dog('doggy', 'brrr');
// const cat = new Cat('kitty', 'meow');

// dog.say();
// cat.say();
// ```

// ## Ternary Operator
// - condition ? (true: do something) : (false: do something)
// ```
// const array = [];
// let text = array.length === 0
//     ? 'empty array'
//     : 'not empty array' ;
// console.log(text);
// ```

// ```
// const condition1 = false;
// const condition2 = false;

// const value = condition1
//     ? 'wow'
//     : condition2
//         ? 'blabla'
//         : 'foo';

// console.log(value)
// ```

// ## Boolean
// ```
// function print(person) {
//     if (person === undefined || person === null) {
//         console.log('No person');
//         return;
//     }
//     console.log(person.name);
// }
// const person = null;
// print(person);
// ```
// ```
// function print(person) {
//     if (!person) {
//         console.log('No person');
//         return;
//     }
//     console.log(person.name);
// }

// const person = null;
// print(person);
// ```
// ```
// console.log(!undefined); // true
// console.log(!null); // true
// console.log(!0); // true
// console.log(!''); // true
// console.log(!NaN); // true
// ```

// - Value available => true else false : !!

const value = { a:1 }; 
const truthy = !!value;
console.log(truthy)
