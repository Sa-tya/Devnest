import React from 'react';

const styl = {
    backgroundColor:"cyan",
    borderRadius: "20px",
    border: "2px solid red"
};
const app_style = {
    display: "grid",
    width: "400px",
    height :"50px",
    gridTemplateColumns: "auto auto auto auto",
    margin: "5% auto",
    gridGap: "10px"
}
class Counter extends React.Component {
    constructor(){
        super();
        this.state={ count: 0 }
    }
    updat(){
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        return <button style={styl} onClick={()=> this.updat()}>{this.state.count}</button>
    }
}


function App(){
 return (<div style={app_style}>
        <Counter /> <Counter /> <Counter /> <Counter />
 </div>)
}
export default App;