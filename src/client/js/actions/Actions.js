import alt from "../helpers/alt";
import request from "superagent";

const Actions = {

	// functions
	addToDo(data) {
		return data;
	},

	deleteToDo(index) {
		return index;
	},

	receivedApiTodos(todos) {
		return todos;
	},

	getApiTodos() {
		const self = this;
		request
			.get("http://localhost:3000/api/todos")
			.end((err, res) => {
				if(!err) {
					self.receivedApiTodos(res.body.todos);
				}
			});
	}
};

module.exports = alt.createActions(Actions);
