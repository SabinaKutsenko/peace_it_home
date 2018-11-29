import React, { Component } from "react";
import { string, object } from "prop-types";

import "./Rectangle.css";

class Rectangle extends Component {
	static propTypes = {
		style: object,
		text: string
	}

	static defaultProps = {
		text: "Пустой"
	}

	render() {
		const { text, style } = this.props;

		/*console.log(this.props);*/

		return (
			<div
				style={style}
				className={"rectangle"}
			>

				<p>{text}</p>

				{this.props.children}
			</div>
		);
	}
}

export default Rectangle;
