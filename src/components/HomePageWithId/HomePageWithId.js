import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from "../HomePage/HomePage.less";


class HomePageWithId extends Component {
	state = {
		posts: []
	}

	async componentDidMount() {
		try {
			let result = await fetch('https://jsonplaceholder.typicode.com/posts/');
			result = await result.json();

			this.setState({
				posts: result
			})

		} catch (e) {
			console.log(e);
		}

	}

	renderItem = () => {
		const { posts } = this.state;

		const index = this.props.match.params.id - 1;

		return (
			<div className={classes.homePage}>
				<div className={classes.homePagePostWrapper} >
					<h1 >{ posts[index].title }</h1>
					<h4>{ posts[index].body }</h4>

					<button>
						<Link to='/'>
							Back to homepage
						</Link>
					</button>
				</div>
			</div>
		)
	}

	render() {
		const { posts } = this.state;

		return (

			<>
				{ posts.length === 0 ?
					<div> Loader </div>
					:
					this.renderItem()
				}
			</>
		);
	}
}

export default HomePageWithId;
