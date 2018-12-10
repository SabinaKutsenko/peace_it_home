import React, { Component } from 'react';

import { array, func } from "prop-types";

import classes from "../../App.less";

class Basket extends Component {
	static propTypes = {
		basket: array,
		refProp: func
	}

	render() {
		const { basket, refProp } = this.props;

		return (
			<div ref={refProp} className={`${classes.appSection} "container"`} >
				<h2>Basket</h2>
				<div>
					{ (basket.length < 1) ? "Empty" :
						basket.map((item) => {
							return (
								<div key={item.id}>{item.name} - {item.count}</div>
							);
						})
					}
				</div>
			</div>
		);
	}
}

export default Basket;
