var alt = require("../helpers/alt");
var Actions = require("../actions/Actions");

var Store = {

	state: {
		todoList: [],
		apiTodos: []
	},

	bindListeners: {
		addToDo: Actions.addToDo,
		deleteToDo: Actions.deleteToDo,
		receivedApiTodos: Actions.receivedApiTodos
	},

	addToDo(data) {
		let newToDo = this.state.todoList;
		newToDo.push(data);
		this.setState({ todoList: newToDo });
	},

	deleteToDo(index) {
		let newToDo = this.state.todoList;
		newToDo.splice(index, 1);
		this.setState({ todoList: newToDo });
	},

	receivedApiTodos(todos) {
		this.setState({ apiTodos: todos });
	}

};

module.exports = alt.createStore(Store, "Request Store");
