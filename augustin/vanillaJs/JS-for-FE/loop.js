// for (변수 선언문 또는 할당문; 조건식; 증감식) {
//     조건문이 참일 때, 반복 실행될 문
// }

const ulEl = document.querySelector("ul")

for (let i = 0; i < 3; i++) {
    console.log(i);
}


for (let i = 0; i < 10; i++) {
    // Element 생성
    const li = document.createElement("li")
    // li tag에 textContent 추가
    li.textContent = `list-${i+1}`

    // addEventListener : 해당 요소에 event 연결
    li.addEventListener('click', function () {
        console.log((li.textContent))
    })
    // 해당 li tag를 html의 ui tag에 삽입
    ulEl.appendChild(li)
}