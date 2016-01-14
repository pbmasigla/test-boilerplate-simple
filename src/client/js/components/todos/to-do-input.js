import "../../../scss/to-do/to-do-input.scss";

export default class ToDoInput extends React.Component {
	constructor (props) {
		super(props);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleAddToDo = this.handleAddToDo.bind(this);
	}

	handleAddToDo () {
		var newToDo = ReactDOM.findDOMNode(this.refs.todo).value;
		this.props.addToDo(newToDo);
		ReactDOM.findDOMNode(this.refs.todo).value = "";
	}

	handleKeyDown (e) {
		if (e.key === "Enter") {
			this.handleAddToDo();
		}
	}

	render () {
		return (
			<div className="to-do-input__container">
				<input
					ref="todo"
					className="to-do-input__input"
					onKeyDown={ this.handleKeyDown } />

				<a className="to-do-input__button" onClick={ this.handleAddToDo }>Add To Do</a>
			</div>
		);
	}
}
