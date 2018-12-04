import React, { Component } from 'react';

import { number }  from "prop-types";


class Display extends Component {

	static propTypes = {
		number: number
	}

	static defaultProps = {
		number: 0
	}
	//
	// onButtonIncrementClick = () => {
	// 	this.setState({
	// 		number: this.state.number + 1
	// 	})
	// }
	//
	// onButtonDecrementClick = () => {
	// 	this.setState({
	// 		number: this.state.number - 1
	// 	})
	// }

	render() {
		const { number } = this.props;

		return (
			<h1>{ number }</h1>
		);
	}
}

export default Display;
