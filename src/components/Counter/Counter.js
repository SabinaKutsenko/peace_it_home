import React, { Component } from 'react';

import { func }  from "prop-types";


class Counter extends Component {

	static propTypes = {
		onChangeNumberValue: func
	}

	onButtonClick = (event)=> {
		this.props.onChangeNumberValue(event.target.textContent);
	}

	render() {

		return (
			<div>
				<button onClick={this.onButtonClick}>+</button>
				<button onClick={this.onButtonClick}>-</button>
			</div>
		);
	}
}

export default Counter;
