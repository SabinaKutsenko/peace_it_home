import React, { Component } from 'react';

import classes from "./Circle.less";

// import classes from "./App.less";

class Circle extends Component {
	render() {
		return (
			<div className={classes.circle}>
				<div className={classes.circleContent}>
					<p>hi</p>
					<span>span</span>
				</div>
			</div>
		);
	}
}

export default Circle;
