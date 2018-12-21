import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from "./HomePage.less";


class HomePage extends Component {
	state = {
		posts: []
	}

	async componentDidMount() {
		try {
			let result = await fetch('https://jsonplaceholder.typicode.com/posts/');

			result = await result.json();

			console.log("data get");

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

		console.log("data 2");
	}

	renderPost = (post) => {
		const { id, title } = post;

		return (<div key={id} className={classes.homePagePostWrapper}>
			<Link to={`/homepage/${id}`} >{ title }</Link>
		</div>
		);
	}

	render() {
		const { posts } = this.state;

		return (
			<div className={classes.homePage}>
				<ul>
					{
						posts.map(post => {
							return this.renderPost(post);
						})
					}
				</ul>
			</div>
		);
	}
}

export default HomePage;
