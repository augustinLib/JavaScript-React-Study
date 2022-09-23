// REFERENCE : https://velog.io/@ljinsk3/JavaScript-기초-문법-정리-1 
// REFERENCE : Copilot 

// 1. Variable defining

// <var> define a variable
// <let> define a varialble: but cannot be redefined
// <const> define a constant: cannot be redefined nor changed

// 2. Operator

// <+, -, *, />
// <++, --> increment and decrement
// <+=, -=, *=, /=, %=> compound assignment
// <==, ===, !=, !==, >, <, >=, <=> comparison
// <!, &&, ||> logical operator


// 3. Conditional

// <if> <else> <else if> <switch> <case> <default>
// if (condition) {
//     // do something
// } else if (condition) {
//     // do something
// } else {
//     // do something
// }

// <switch> <case> <default>
// switch (expression) {
//     case value1:
//         // do something
//         break;
//     case value2:
//         // do something
//         break;
//     default:
//         // do something
// }

// 4. Loop

// <for> <while> <do while>
// for (initialization; condition; final expression) {
//     // do something
// }

// example
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// while (condition) {
//     // do something
// }

// example
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// do {
//     // do something
// } while (condition)

// example
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// 5. Function

// <function> <return>
// function name(parameter1, parameter2, ...) {
//     // do something
//     return value;
// }

// example
// function add(a, b) {
//     return a + b;
// }

// 6. Array

// <array> <length> <push> <pop> <shift> <unshift> <splice> <slice> <indexOf> <join> <split>
// <sort> <reverse> <concat> <includes> <find> <findIndex> <forEach> <map> <filter> <reduce> <every> <some>
// let array = [value1, value2, ...];
// let array = new Array(value1, value2, ...);

// example
// let array = [1, 2, 3, 4, 5];
// let array = new Array(1, 2, 3, 4, 5);

// push
// array.push(value);

// splice
// array.splice(index, howmany, item1, item2, ...); // index: start index, howmany: number of elements to be removed, item1, item2, ...: new elements to be added 
// example
// let array = [1, 2, 3, 4, 5];
// array.splice(2, 0, 6, 7);
// console.log(array); // [1, 2, 6, 7, 3, 4, 5]

// slice
// array.slice(start, end); // start: start index, end: end index

// split
// array.split(separator, limit); // separator: separator, limit: number of elements to be returned
// example
// let array = [1, 2, 3, 4, 5];
// let newArray = array.split(2);
// console.log(newArray); // [1, 2]

// sort
// array.sort(function(a, b) {return a - b}); // sort in ascending order
// array.sort(function(a, b) {return b - a}); // sort in descending order
// example
// let array = [1, 2, 3, 4, 5];
// array.sort(function(a, b) {return b - a});
// console.log(array); // [5, 4, 3, 2, 1]

// <concat> 
// concat
// array.concat(value1, value2, ...); // value1, value2, ...: values to be concatenated to the array

// includes
// array.includes(value); // value: value to be checked // return true if the array contains the value, otherwise return false

// find
// array.find(function(currentValue, index, arr), thisValue); 
// currentValue: current element being processed in the array, 
// index: index of the current element being processed in the array, 
// arr: array find() was called upon
//  thisValue: value to be passed to the function to be used as its "this" value. If this parameter is empty, the value "undefined" will be passed as its "this" value

// <forEach>
// array.forEach(function(currentValue, index, arr), thisValue); 
// currentValue: current element being processed in the array,
// index: index of the current element being processed in the array,
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }
