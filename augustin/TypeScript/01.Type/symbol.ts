console.log(Symbol("foo") === Symbol("foo"));
// 원시 타입 값을 담아서 사용
// 고유하고 수정불가능한 값으로 만들어줌
// 접근 제어에 많이 사용됨

const sym = Symbol()

const obj = {
    [sym]: "Value"
};

obj[sym];
