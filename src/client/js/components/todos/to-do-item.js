import "../../../scss/to-do/to-do-item.scss";

export default class ToDoItem extends React.Component {
	constructor (props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
		this.props.deleteToDo(this.props.index);
	}

	render () {
		return (
			<div className="to-do-item__container">
				<span className="to-do-item__text">{ this.props.item }</span>
				<span onClick={ this.handleClick }>X</span>
			</div>
		);
	}
}
