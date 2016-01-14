import Actions from "../../actions/Actions";
import Store from "../../stores/Store";
import ToDoInput from "./to-do-input";
import ToDoList from "./to-do-list";

export default class ToDoContainer extends React.Component {
	constructor (props) {
		super(props);
		var storeState = Store.getState();
		this.state = {
			todoList: storeState.todoList,
			apiTodos: storeState.apiTodos
		};

		this.addToDo = this.addToDo.bind(this);
		this.deleteToDo = this.deleteToDo.bind(this);
		this.handleStateChange = this.handleStateChange.bind(this);
	}

	componentDidMount () {
		Actions.getApiTodos();
		Store.listen(this.handleStateChange);
	}

	componentWillUnmount () {
		Store.unlisten(this.handleStateChange);
	}

	handleStateChange (state) {
		this.setState({
			todoList: state.todoList,
			apiTodos: state.apiTodos
		});
	}

	addToDo (newToDo) {
		if ( newToDo !== "" ) {
			Actions.addToDo( newToDo );
		}
	}

	deleteToDo (index) {
		Actions.deleteToDo( index );
	}

	render () {
		return (
			<div className="to-do__container">
				<ToDoInput
					addToDo={ this.addToDo } />

				<ToDoList
					deleteToDo={ this.deleteToDo }
					todoList={ this.state.todoList } />
			</div>
		);
	}
}
