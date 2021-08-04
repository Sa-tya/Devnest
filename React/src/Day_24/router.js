import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import './router.css';

class App extends Component {
	// constructor(){
	// 	super();
	// 	this.state = {login:false}
	// }
render() {
	return (
		<div><h1>Hello</h1>
	<Router>
		<div className="App">
			<ul className="App-header">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About Us</Link></li>
				<li><Link to="/contact">Contact Us</Link></li>
			</ul>
			<Switch>
			<Route exact path='/' component={Home}></Route>
			<Route exact path='/about' component={About}></Route>
			<Route exact path='/contact' component={Contact}></Route>
			</Switch>
		</div>
	</Router> 
	</div>
);
}
}

export default App;
