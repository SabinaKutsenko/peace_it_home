import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { object } from "prop-types";
import classes from "../HomePage/HomePage.less";


class HomePageWithId extends Component {
	static propTypes = {
		post: object,
	}

	renderItem = () => {
		const { post } = this.props;

		return (
			<div className={classes.homePage}>
				<div className={classes.homePagePostWrapper} >
					<h1 >{ post.title }</h1>
					<h4>{ post.body }</h4>

					<button>
						<Link to="/">
							Back to homepage
						</Link>
					</button>
				</div>
			</div>
		);
	}

	render() {
		const { posts } = this.props;

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
