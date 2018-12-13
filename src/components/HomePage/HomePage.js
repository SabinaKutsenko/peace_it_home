import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from "./HomePage.less";
import { array } from "prop-types";


class HomePage extends Component {
	static propTypes = {
		posts: array,
	}

	renderPost = (post) => {
		const { id, title } = post;

		return (<div key={id} className={classes.homePagePostWrapper}>
			<Link to={`/homepage/${id}`} info={"dd"} >{ title }</Link>
		</div>
		);
	}

	render() {
		const { posts } = this.props;

		return (
			<div className={classes.homePage}>
				<ul>
					{
						posts.map((post) => {
							return this.renderPost(post);
						})
					}
				</ul>
			</div>
		);
	}
}

export default HomePage;
