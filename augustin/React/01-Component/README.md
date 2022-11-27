# component

## Class component
```javascript
// 선언
class ClassComponent extends React.Component {
    render() {
        return <div>Hello</div>;
    }
}

// 실행
ReactDOM.render(
    <ClassComponent/>,
    document.querySelector("#root")
)
```
## Function component
```javascript
// 선언 1번 방법
function FunctionComponent() {
    return <div>Hello</div>;
}

// 선언 2번 방법
const FunctionComponent = () => <div>Hello</div>;
    
// 실행
ReactDOM.render(<FunctionComponent/>, document.querySelector("#root"))
```

## React.createElement로 컴포넌트 만들기
