# JSX
JSX는 자바스크립트의 확장 문법이며 XML과 매우 비슷한 형태를 가지고 있다.  
JSX와 같은 형식으로 작성한 코드는 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환된다.  

## JSX의 장점
이러한 JSX의 장점은 다음과 같다.

### 보기 쉽고 익숙하다.
일반 자바스크립트만 사용한 코드와 JSX로 작성한 코드를 비교해보면, JSX를 사용하는 것이 더 가독성이 높고 작성하기도 쉽다.

### 높은 활용도
JSX에서는 `div`나 `span`과 같은 HTML 태그를 사용할 수 있고, 컴포넌트도 JSX 안에서 작성할 수 있다.   
src/index.js 파일을 열어보면, app의 컴포넌트를 HTML을 작성하는 것처럼 작성하는 것을 확인할 수 있다.
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
`document.getElementById()`를 이용하여 id가 root인 HTML 요소를 찾은 다음,  
리액트 컴포넌트를 보여줄 수 있는 루트 인스턴스를 `createRoot()`를 사용하여 생성한다.  
이후 `root.render()`함수에 JSX 코드를 인자로 넣어 보여주고 싶은 컴포넌트를 화면에 출력한다.  

## JSX 문법
### 감싸인 요소
컴포넌트에 여러 요소가 존재하면, 반드시 부모 요소 하나로 감싸야 한다.