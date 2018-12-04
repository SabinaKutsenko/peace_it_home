import React, { Component } from 'react';

import { array, func }  from "prop-types";

import "./TodoList.css";

class TodoList extends Component {
	static propTypes = {
		deleteElem: func,
		list: array
	}

	renderListItem = (item) => {
		const { text, id } = item;
		return <li key={id}><span>{ text }</span><button onClick={this.onDeleteClick(id)}>Delete</button></li>;
	}

	onDeleteClick = (id) => () => {
		this.props.deleteElem(id);
	}

	render() {
		const { list } = this.props;

		return (
			<div className={"todo-list-wrapper"}>
				<ul>
					{
						list.map((item) => {
							return this.renderListItem(item);
						})
					}
				</ul>
			</div>
		);
	}
}

export default TodoList;
