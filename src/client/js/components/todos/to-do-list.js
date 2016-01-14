import "../../../scss/to-do/to-do-list.scss";
import ToDoItem from "./to-do-item";

export default class ToDoList extends React.Component {
	render () {
		const list = this.props.todoList.map((item, index) => (
			<ToDoItem
				key={ index }
				item={ item }
				index={ index }
				deleteToDo={ this.props.deleteToDo } />
		));

		return (
			<div className="to-do-list__container">
				<div className="to-do-list__background"></div>
				<h1 className="to-do-list__header">my list</h1>
				{ list }
			</div>
		);
	}
}
