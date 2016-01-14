import React, { PropTypes } from 'react';
import { Router, Route } from 'react-router';
import MyToDo from "./components/todos/todo";
import MyName from "./components/myname/myname";

export default class Root extends React.Component {
	render() {
		return (
			<Router>
				<Route path="/" component={ MyToDo } />
				<Route path="banana" component={ MyName } />
			</Router>
		);
	}
}
