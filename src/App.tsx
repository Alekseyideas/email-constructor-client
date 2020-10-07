import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Home, Login } from './pages';

function App() {
	return (
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route exact path="/" component={Home} />
		</Switch>
	);
}

export default App;
