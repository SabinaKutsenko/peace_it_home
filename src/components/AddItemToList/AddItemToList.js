import React, { Component } from 'react';

import { func, string } from "prop-types";

class AddItemToList extends Component {
	static propTypes = {
		inputText: string,
		onInputChange: func,
		onSaveBtnClick: func
	}

	render() {
		const { inputText } = this.props;

		return (
			<div>
				<input value={inputText} onChange={this.props.onInputChange} type="text" />
				<button onClick={this.props.onSaveBtnClick}>Add Item</button>
			</div>
		);
	}
}
export default AddItemToList;
