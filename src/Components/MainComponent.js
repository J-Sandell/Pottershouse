import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Main() {
	return (
		<Router>
			<Head />
			<Route path="./home" component={Home} />
			<Route path="./events" component={Event} />
		</Router>
	)
}