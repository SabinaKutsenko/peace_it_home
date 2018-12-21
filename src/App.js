import React, { Component } from 'react';

import { string } from "prop-types";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./components/HomePage/HomePage";
import HomePageWithId from "./components/HomePageWithId/HomePageWithId";

import Form from "./components/Form/Form";
import stepFirst from "./components/Form/steps/stepFirst";
import stepLast from "./components/Form/steps/stepLast";

import FormIk from "./components/FormIk/FormIk";
import FormIkSimple from "./components/FormIkSimple/FormIkSimple";
import About from "./components/About/About";


import classes from "./App.less";

class App extends Component {
	static propTypes = {
		nameGetValue: string
	}

	render() {
		const { nameGetValue } = this.props;

		return (
			<>
				<div className={`${classes.appMenu} container`}>
					<h1>Your name is {nameGetValue}</h1>
					<Link to={`/`}>Home</Link>
					<Link to={`/formIk`}>FormIk</Link>
					<Link to={`/formIkSimple`}>FormIkSimple</Link>
					<Link to={`/form`}>Form</Link>
					<Link to={`/about`}>About Us</Link>
				</div>

				<Switch>
					<Route exact path={"/"} component={HomePage} />
					<Route exact path={"/form"} component={Form} />
					<Route exact path={"/form/stepFirst"} component={stepFirst} />
					<Route exact path={"/form/stepLast"} component={stepLast} />
					<Route exact path={"/formIk"} component={FormIk} />
					<Route exact path={"/formIkSimple"} component={FormIkSimple} />
					<Route exact path={"/about"} component={About} />
					<Route path={"/homepage/:id"} component={HomePageWithId} />
				</Switch>
			</>
		);
	}
}

function mapStateToProps({ app }) {
	return {
		nameGetValue: app.name,
	};
}

export default withRouter(connect(mapStateToProps, null)(App));
