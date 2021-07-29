import React from 'react';
import './chess_board.css'

// class Box extends React.Component{
//     render(){
//         return <div className="box">Hello</div>
//     }
// }
function Container(){
return (
    <div className="App">
        {[...Array(64)].map((e,i)=> <div className="box" style={{backgroundColor :( Math.floor(i/8%2) === Math.floor(i%2) ? "black": "white") }}></div> )}
        {/* [...Array(n)].map((e, i) => <Box />) */}
    </div>
)
}
export default Container;