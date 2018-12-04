import React, { Component } from 'react';

import { func, number }  from "prop-types";


class NumberInput extends Component {

	static propTypes = {
		onInputChange: func,
		number: number
	}

	onInputChange = (event) => {
		this.props.onInputChange(event.target.value);
	}

	// onButtonClick = () => {
	// 	this.props.onInputChange(this.state.inputNumber);
	//
	// 	this.setState({
	// 		inputNumber: 0
	// 	})
	//
	// 	//console.log("inputNumber",this.state.inputNumber)
	// }

	render() {
		const { number } = this.props;
		//const { inputText } = this.state;

		return (
			<div>
				<input value={number} onChange={this.onInputChange} type="number" />
				{/*<button onClick={this.onButtonClick}>Save</button>*/}
			</div>
		);
	}
}

export default NumberInput;
