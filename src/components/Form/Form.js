import React, { Component } from "react";

import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { number } from "prop-types";
import * as formActions from "../../modules/form/form.actions";

import classes from "./Form.less";

class Form extends Component {
	static propTypes = {
		formPage: number,
	}

	render() {
		const { formPage } = this.props;
		console.log(formPage);
		return (
			<div className={`${classes.form} container`}>
				<h1>Form with redux </h1>
				<button className={"btn btn-warning"}><Link to={`/form/stepFirst`} >Start form</Link></button>
			</div>
		);
	}
}

function mapStateToProps({ form }) {
	return {
		formPage: form.formPage,
	};
}
export default connect(mapStateToProps, { ...formActions })(Form);
