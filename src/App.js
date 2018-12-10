import React, { Component } from 'react';

import Circle from "./components/Circle/Circle";
import ProductList from "./components/ProductList/ProductList";
import Basket from "./components/Basket/Basket";

import { LoaderContainer, loader } from "./components/Loader/Loader";

import classes from "./App.less";

class App extends Component {
	constructor(props) {
		super(props);

		this._sectionRef = React.createRef();
		this._sectionRef2 = React.createRef();
		this._sectionRef3 = React.createRef();
		this._sectionRef4 = React.createRef();
	}

	state = {
		list: [
			{ id: 1, name: "Mars", price: 2.25 },
			{ id: 2, name: "Snickers", price: 1.70 },
			{ id: 3, name: "Bounty", price: 2.10 },
		],
		basket: [
			/*{ id: 1, name: "Mars", count: 2 },*/
		],
		scroll: 0
	}

	componentDidMount() {
		loader.show();
		setTimeout(() => {
			loader.hide();
		}, 2000);
	}

	componentDidUpdate() {
		/*localStorage.setItem("list", JSON.stringify(this.state.list));*/
		const scrollPosition = this.state.scroll;
		(scrollPosition === 1) && (this._sectionRef).scrollIntoView({ behavior: "smooth" });
		(scrollPosition === 2) && (this._sectionRef2).scrollIntoView({ behavior: "smooth" });
		(scrollPosition === 3) && (this._sectionRef3).scrollIntoView({ behavior: "smooth" });
		(scrollPosition === 4) && (this._sectionRef4).scrollIntoView({ behavior: "smooth" });
	}

	clickMenuLink =(value) => () => {
		this.setState({
			scroll: value
		});
	}


	addProduct = (infoProduct) => () => {
		const { basket } = this.state;
		if (basket.findIndex((x) => x.id === infoProduct.id) === -1) {
			const value = { id: infoProduct.id, name: infoProduct.name, count: 1 };
			this.setState({
				basket: [...this.state.basket, value]
			});
		} else {
			const newBasket = basket.map((item) => {
				if (item.id === infoProduct.id) {
					return { id: item.id, name: item.name, count: item.count + 1 };
				}
				return { id: item.id, name: item.name, count: item.count };
			});
			this.setState({
				basket: newBasket
			});
		}
	}

	deleteProduct = (infoProduct) => () => {
		const { basket } = this.state;
		const index = basket.findIndex((x) => x.id === infoProduct.id);
		const indexCount = basket[index].count;

		const newBasket = (indexCount === 1) ?
			basket.filter((item) => {
				if (item.id !== infoProduct.id) {
					return item;
				}
			})
			:
			basket.map((item) => {
				if (item.id === infoProduct.id) {
					return { id: item.id, name: item.name, count: item.count - 1 };
				}
				return item;
			});

		this.setState({
			basket: newBasket
		});
	}

	render() {
		return (
			<div className={classes.app}>
				<LoaderContainer />
				<div className={classes.appMenu} >
					<button onClick={this.clickMenuLink(1)} >green</button>
					<button onClick={this.clickMenuLink(2)} >brown</button>
					<button onClick={this.clickMenuLink(3)} >grey</button>
					<button onClick={this.clickMenuLink(4)} >yellow</button>
				</div>
				<div ref={(el) => { this._sectionRef = el; }} className={classes.appSection}>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
				</div>
				<div ref={(el) => { this._sectionRef2 = el; }} className={classes.appSection}>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
				</div>
				{/*<Circle />*/}
				<ProductList refProp={(el) => { this._sectionRef3 = el; }} list={this.state.list} basket={this.state.basket} deleteProduct={this.deleteProduct} addProduct={this.addProduct} />
				<Basket refProp={(el) => { this._sectionRef4 = el; }} basket={this.state.basket} />
			</div>
		);
	}
}

export default App;
