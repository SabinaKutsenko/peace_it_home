import React, { Component } from "react";
import { string } from "prop-types";

import "./RectangleWithState.css";

class RectangleWithState extends Component {
	static propTypes = {
		textProps: string
	}

	state = {
		backgroundColor: "#fff",
		text: "State component"
	}

	componentDidMount() {
		debugger;
		const { textProps } = this.props;

		if (textProps) {
			this.setState({
				text: textProps
			});
		}
	}

	onChangeInput = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		const { backgroundColor, text } = this.state;
		debugger;
		return (
			<div
				className={"rectangle_with_state"} style={{ backgroundColor }}
			>
				<input value={text} onChange={this.onChangeInput} name="text" type="text" />
				<input onChange={this.onChangeInput} name="backgroundColor" type="color" />

				<p>{ text }</p>
			</div>
		);
	}
}

export default RectangleWithState;
