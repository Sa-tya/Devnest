import { useReducer, useState } from "react";

const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case "Add":
            return { ...state, x : state.x + parseInt(action.x)}
        case 'Minus':
            return { ...state, x :  state.x - action.x}
        case 'Reset':
            return { ...state, x: 0}
        default:
            return state
    }
    
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, {x:0});
    const [x, setX] = useState(1)
    return (<>
        <h1>Count - {count.x}</h1>
        <input type='number' min={0} max={10} value={x} onChange={(e) => setX(e.target.value)} />
        <button onClick={() => dispatch({ type: 'Add', x: x })}>+{x}</button>
        <button onClick={() => dispatch({ type: 'Minus', x: x })}>-{x}</button>
        <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
    </>);
}

export default Counter;