import React from 'react' // react 불러오기~

function Hello() { 
    return <div>hi</div>;
} 

class Welcome extends React.Component {
    render() {
        return <h1>Welcome, {this.props.name}</h1>;
    }
}

export default Hello; // Hello 라는 component 내보내기