if(!false) console.log(false + " is Falsy value")
if(!undefined) console.log(undefined + " is Falsy value")
if(!null) console.log(null + " is Falsy value")
if(!0) console.log(0 + " is Falsy value")
if(!NaN) console.log(NaN + " is Falsy value")
if(!'') console.log('' + " is Falsy value")

// Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Boolean('x'), typeof Boolean('x'));
console.log(Boolean(''), typeof Boolean('')); // ''(빈 문자열)은 Falsy 값
console.log(Boolean('false'), typeof Boolean('false'));

console.log(Boolean(0), typeof Boolean(0)); // 0은 Falsy 값
console.log(Boolean(1), typeof Boolean(1));
console.log(Boolean(NaN), typeof Boolean(NaN)); // NaN은 Falsy 값
console.log(Boolean(Infinity), typeof Boolean(Infinity));
console.log(Boolean(null), typeof Boolean(null)); // null은 Falsy 값
console.log(Boolean(undefined), typeof Boolean(undefined)); // undefined는 Falsy값
console.log(Boolean({}), typeof Boolean({}));
console.log(Boolean([]), typeof Boolean([]));

// ! 부정 논리 연산자를 두 번 사용하는 방법
console.log(!!('x'), typeof !!('x'));
console.log(!!(''), typeof !!('')); // ''(빈 문자열)은 Falsy 값
console.log(!!('false'), typeof !!('false'));

console.log(!!(0), typeof !!(0)); // 0은 Falsy 값
console.log(!!(1), typeof !!(1));
console.log(!!(NaN), typeof !!(NaN)); // NaN은 Falsy 값
console.log(!!(Infinity), typeof !!(Infinity));
console.log(!!(null), typeof !!(null)); // null은 Falsy 값
console.log(!!(undefined), typeof !!(undefined)); // undefined는 Falsy값
console.log(!!({}), typeof !!({}));
console.log(!!([]), typeof !!([]));



