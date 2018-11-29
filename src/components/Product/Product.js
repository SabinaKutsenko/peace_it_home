import React, { Component } from "react";

import { number, string, object /*  bool, func, object, any*/ } from "prop-types";

import "./Product.css";

class Product extends Component {
	static propTypes = {
		backgroundColor: object,
		id: number,
		name: string,
		price: string,
	}
	static  defaultProps = {
		id: 0,
		name: "Empty",
		price: "--",
	}
	state = {
		buttonText: "Add",
	}
	addProduct = (event, buttonText) => {
		/*console.log(event.target.value);
		console.log(this.state.buttonText);*/
		if (this.state.buttonText == "Add") {
			this.setState({
				buttonText: "Delete"
			});
		} else {
			this.setState({
				buttonText: "Add"
			});
		}
	}

	render() {
		const { id, name, price, backgroundColor } = this.props; /*деструктуризация this.props.name и this.props.price*/
		const { buttonText } = this.state;
		return (

			<div
				style={
					backgroundColor
				} className={"product"}
			>
				{/*<span>{id}</span>*/}
				<span>{name}</span>  {/*this.props-все пропсы переданные этому компоненту - передаем в апп.жс*/}
				<span>{price}</span> {/*this.state-все стейты этого компонента*/}
				{/*this.func - это ф-ция описанная внутри этого компонента*/}
				<select type={"size"} >
					<option value={"s"}>s</option>
					<option value={"m"}>m</option>
				</select>
				<input type={"color"} />
				<button onClick={this.addProduct} type="submit" value={id}>{buttonText} </button>
			</div>
		);
	}
}

export default Product;
