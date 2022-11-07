# Memo for React

> [레퍼런스: 벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us) 

<br>

---
## Starting React
---
<br />

- Starting React on Webpage
```
cd Repo/Projects/JavaScript-React-Study/fritters/begin-react
yarn start
```
---
## React Component
---

### Making Component 

```
"""Hello.js"""

import React from 'react';

function Hello() {
  return <div>안녕하세요</div>
}

export default Hello;
```

### App.js
```
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

export default App;
```

---
## Rules
--- 

### 1. Close the tags <br />
### 2. Fragment
```
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <>
      <Hello />
      <div>안녕히계세요</div>
    </>
  );
}

export default App;
```
- fragments are not shown as additional element
- by doing this, unnecessary HTML tags can be disregarded

### 3. Using JS variable inside JSX
```
return (
    <>
      <Hello />
      <div>{name}</div>
    </>
  );
```
- Use braces

### 4. style and className
- inline styles should be written as JS Object
- \- devided variable name should use camel case style naming
```
function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
    </>
  );
}
```
- remember? In react braces are used to reference the variable!
- 
### 5. CSS class
```
"""App.css"""
.gray-box {
  background: gray;
  width: 64px;
  height: 64px;
}
```
```
"""App.js"""
import React from 'react';
import Hello from './Hello';
import './App.css';


function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
```
### 6. Comment
```
{/* like this */}
```
- inside the tag `// style ` comments possible