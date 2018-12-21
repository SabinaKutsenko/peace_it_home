import React, { Component } from 'react';
import { string, func, number } from "prop-types";

import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as appActions from "../../modules/app/app.actions";
import * as basketActions from "../../modules/basket/basket.actions";

class About extends Component {
	static propTypes = {
		changeName: func,
		count: number,
		decrementBasket: func,
		incrementBasket: func,
		nameGetValue: string,
	}

	onInputChange = (event) => {
		this.props.changeName(event.target.value);
	}

	onClickIncrementButton = () => {
		this.props.incrementBasket(this.props.count + 1);
	}

	onClickDecrementButton = () => {
		this.props.decrementBasket(this.props.count - 1);
	}

	render() {
		const { nameGetValue, count } = this.props;
		return (
			<div>
				<div>
					<h1>Count of basket element: {count} </h1>
					<button onClick={this.onClickIncrementButton}>+</button>
					<button onClick={this.onClickDecrementButton}>-</button>
				</div>


				<h1>Hi my name is {nameGetValue} </h1>
				<input type="text" onChange={this.onInputChange} />
				<Link to={`/`} >home</Link>
			</div>
		);
	}
}


function mapStateToProps({ app, basket }) {
	return {
		nameGetValue: app.name,
		count: basket.countOfProduct,
	};
}
export default connect(mapStateToProps, { ...appActions, ...basketActions })(About);
