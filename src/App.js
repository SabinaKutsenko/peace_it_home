import React, { Component } from 'react';

import Rectangle from "./components/Rectangle/Rectangle";
import RectangleWithState from "./components/RectangleWithState/RectangleWithState";
import Circle from "./components/Circle/Circle";
import Product from "./components/Product/Product";

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Rectangle text={"Привет"} style={{ backgroundColor: "yellow", width: "500px" }} >
					<Circle myprops={"Test"}>
						<p>React</p>
						<p>React</p>
					</Circle>
				</Rectangle>
				<RectangleWithState textProps={"first"} />

				<div className="container">
					<Product id={1} name={"name1"} price={"11"} backgroundColor={{ backgroundColor: "red", border: "2px solid #000" }} btnText={"Add"} />
					<Product id={2} name={"name2"} price={"22"} />
					<Product />
				</div>
			</div>
		);
	}
}

export default App;
