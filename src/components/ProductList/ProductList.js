import React, { Component } from 'react';
import { func, array } from "prop-types";

import Product from "../Product/Product";

import classes from "../../App.less";

class ProductList extends Component {
	static propTypes = {
		addProduct: func,
		basket: array,
		deleteProduct: func,
		list: array,
		refProp: func
	}

	render() {
		const { list, basket, addProduct, deleteProduct, refProp } = this.props;

		return (
			<div className={`${classes.appSection} "container"`} ref={refProp}>
				<h2>Products</h2>
				<div className={classes.appProductList}>
					{
						list.map((item) => {
							return (
								<Product key={item.id} id={item.id} name={item.name} price={item.price} addProduct={addProduct} deleteProduct={deleteProduct} basket={basket} />
							);
						})
					}
				</div>
			</div>
		);
	}
}

export default ProductList;
