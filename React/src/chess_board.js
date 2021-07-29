import React from 'react';
import './chess_board.css';
// import Row from './box_compo'

class Box extends React.Component {
  render(){
    return <div className="box"></div>;
  }
}

class Row extends React.Component{
  render(){
    return <div className="row"> <Box /> <Box /> <Box /> <Box /> <Box /> <Box /> <Box /> <Box /></div>;
  }
}
function App() {
  return (
    <div className="App">
        {/* {[Array(64).map(()=> <Box /> )]} */}
        <Row /> <Row /> <Row /> <Row /> <Row /> <Row /> <Row /> <Row />
    </div>
  );
}

export default App;