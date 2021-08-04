//Example of custom hooks

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import Home from './component/home';
import Set from './setInput';
import Get from './getOutput';
import '../Day_24/router.css';

function Home(){
    return <h1>This is home page !!</h1>
}

class App extends Component {
	
render() {
	return (
		<div>
	<Router>
		<div className="App">
			<ul className="App-header">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/setInput">Set Input</Link></li>
				<li><Link to="/getOutput">Get Output</Link></li>
			</ul>
			<Switch>
			<Route exact path='/' component={Home}></Route>
			<Route exact path='/setInput' component={Set}></Route>
			<Route exact path='/getOutput' component={Get}></Route>
			</Switch>
		</div>
	</Router> 
	</div>
);
}
}

export default App;
