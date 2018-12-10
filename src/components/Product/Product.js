import React, { Component } from 'react';
import { /*func,*/ string, number, func, array } from "prop-types";

import classes from "./Product.less";

class Product extends Component {
	static propTypes= {
		addProduct: func,
		basket: array,
		deleteProduct: func,
		id: number,
		name: string,
		price: number
	}

	render() {
		const { id, name, price, addProduct, deleteProduct, basket } = this.props;
		const value = { id, name };
		const disabled = (basket.findIndex((x) => x.id === id) === -1) ? "disabled" : "";

		return (
			<div className={classes.product} key={id}>
				<h2>{name}</h2>
				<div className={classes.productPrice}>$ {price}</div>
				<button className={`${classes.productBtn} btn btn-success`} onClick={addProduct(value)} >Add</button>
				<button className={`${classes.productBtn} btn btn-dark`}  disabled={disabled} onClick={deleteProduct(value)} >Delete</button>
			</div>
		);
	}
}

export default Product;
