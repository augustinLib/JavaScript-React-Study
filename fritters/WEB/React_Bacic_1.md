> [레퍼런스: 벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us)

---
## Starting React
---

#### Starting React on Webpage
 
```

cd Repo/Projects/JavaScript-React-Study/fritters/begin-react

yarn start

```

---
## React Component
---

#### Making Component

```
"""Hello.js"""

import React from 'react';

function Hello() {
	return <div>안녕하세요</div>
	}

export default Hello;
```

#### App.js

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

#### 1. Close the tags 
- <br />
- <div />

#### 2. Fragment

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

#### 3. Using JS variable inside JSX

```
return (
	<>
		<Hello />
		<div>{name}</div>
	</>
);
```

- Use braces

#### 4. style and className

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
- Remember? In react braces are used to reference the variable!

#### 5. CSS class

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

#### 6. Comment

```
{/* like this */}
```

- Inside the tag `// style ` comments possible

---
## Using props to convey value
---

#### 1. Basic

```
"""App.js"""

import React from 'react';
import Hello from './Hello';

function App(){
	return (
		<Hello name="react" />
	);
}

export default App;
```

```
"""Hello.js"""
import React from 'react';

function Hello(props) {
	return <div>안녕하세요 {props.name}}</div>
}

export default Hello;
```

- We can inquire `name` by using `props.name` 

#### 2. Assigning Plural props, Unstructured Assignments

```
"""App.js"""

import React from 'react';
import Hello from './Hello';

function App() {
	return (
		<Hello name="react" color="red"/>
	)
}

export default App;
```

```
import React from 'react';

function Hello(props) {
	return <div style={{ color: props.color }}> Hi! {props.name}</div>
}

export default Hello;
```

⬇️ With Unstructured Assignment

```
"""Hello.js"""

import React from 'react';

function Hello({color, name}) {
	return <div style={{ color }}>Hi {name}</div>
}

export default Hello;
```

#### 3. defaultProps as default arguments

```
import React from 'react';

function Hello({color, name}) {
	return <div style={{ color }}>Hi {name}</div>
}

Hello.defaultProps = {
	name: '이름없음'
}

export default Hello;
```

```
import React from 'react';
import Hello from './Hello';

function App() {
	return (
		<>
			<Hello name="react" color="red"/>
			<Hello color="pink"/>
		</>
	);
}

export default App;
```

#### 4. Wrapper.js

```
"""Wrapper.js"""

import React from 'react';

function Wrapper() {
	const style = {
		border: '2px solid black',
		padding: '16px',
	};
return (
	<div style={style}>
		{children}
	</div>
	)
}
```

```
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
	return (
		<Wrapper>
			<Hello name="react" color="red"/>
			<Hello color="pink"/>
		</Wrapper>
		);
}

export default App;
```

---
## Conditional Rendering
---

#### Conditional Props

```
"""App.js"""

import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
	return (
		<Wrapper>
			<Hello name="react" color="red" isSpecial={true}/>
			<Hello color="pink" />
		</Wrapper>
	)
}

export default App;

```

```
"""Hello.js"""

import React from 'react';

function Hello({ color, name, isSpecial}) {
	return (
		<div style={{ color }})>
			{ isSpecial ? <b>*</b> : null }
			HI~~ {name}
		</div>
		);
}
Hello.defaultProps = {
	name: 'No Named'
}

export default Hello;
```

- In JSX null false undefined renders nothing
- When declaring \<div> without assigning any conditional value, JS automatically assigns true.

```
"""Hello.js"""

import React from 'react';

function Hello({ color, name, isSpecial }) {
	return (
		<div style= {{ color }})>
			{isSpecial && <b>*</b>}
			Hii~~~~ {name}
		</div>
	);
}

Hello.defaultProps = {
	name: 'No Named'
	}
	
export default Hello;
```

---
## useState
___

#### Counter

<b> Counter.js</b>

```
import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
```

- Don't call, just return the function itself!

<b>App.js</b>
```
import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <Counter />
  );
}

export default App;
```


---
## Input
---

**InputSample.js**

```
import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text}  />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}
```

- `e.target`--> event's target, so that, \<input>'s onChange event ==> call value

**App.js**
```
import React from 'react';
import InputSample from './InputSample';

function App() {
  return (
    <InputSample />
  );
}

export default App;
```


---
## Multiple Inputs
---
<b>Input.js</b>
```
import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
  };


  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
```

**App.js**
```
import React from 'react';
import InputSample from './InputSample';

function App() {
  return (
    <InputSample />
  );
}

export default App;
```









