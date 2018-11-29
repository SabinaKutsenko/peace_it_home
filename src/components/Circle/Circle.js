import React, { Component } from "react";

import "./Circle.css";

class Circle extends Component {
	render() {
		return (

			<div className={"circle"} >
				{this.props.children}
			</div>
		);
	}
}

export default Circle;
