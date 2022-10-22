const a = 1 < 2

if (a) {
    console.log('참')
} else {
    console.log('거짓')
}

// ? 기준으로 앞의 값이 true면 :의 앞부분 실행, false면 뒷부분 실행
console.log(a ? "참" : "거짓")

const h1El = document.querySelector("h1")
h1El.addEventListener("click", () => {
    clearTimeout(timer)
})