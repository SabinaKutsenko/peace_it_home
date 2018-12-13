import React, { Component } from 'react';
import { Link, Route, Switch, withRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import HomePageWithId from "./components/HomePageWithId/HomePageWithId";
import Randomuser from "./components/Randomuser/Randomuser";
import About from "./components/About/About";


import classes from "./App.less";

class App extends Component {
	state = {
		posts: []
	}

	async componentDidMount() {
		try {
			let result = await fetch('https://jsonplaceholder.typicode.com/posts/');

			result = await result.json();

			this.setState({
				posts: result
			});
		} catch (e) {
			console.log(e);
		}

		// fetch('https://jsonplaceholder.typicode.com/posts/')
		// .then(response => response.json())
		// .then(json => {
		// 	console.log("data get");
		//
		// 	fetch('https://jsonplaceholder.typicode.com/posts/').then(response => response.json())
		// 	.then(json => {
		//
		// 	});
		//
		// 	this.setState({
		// 	posts: json
		// })});
	}


	render() {
		const { posts } = this.state;
		return (
			<>
				<div className={`${classes.appMenu} container menu`}>
					<Link to={`/`}>Home</Link>
					<Link to={`/randomuser`}>Randomuser</Link>
					<Link to={`/about`}>About Us</Link>
				</div>

				<Switch>
					<Route exact path={"/"} render={() => <HomePage posts={posts} />} />
					<Route
						path={"/homepage/:id"} render={
							(props) => <HomePageWithId {...props}  post={posts[props.match.params.id - 1]} posts={posts} />
						}
					/>
					<Route exact path={"/randomuser"} component={Randomuser} />
					<Route exact path={"/about"} component={About} />

				</Switch>
			</>
		);
	}
}

export default withRouter(App);
