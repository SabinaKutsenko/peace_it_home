import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { func, object } from "prop-types";
import * as formActions from "../../../modules/form/form.actions";

import classes from "../Form.less";

class stepFirst extends Component {
	static propTypes = {
		changeForm: func,
		formInfo: object,
	}

	onInputChange = (event) => {
		const { formInfo } = this.props;
		/*const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;*/
		/*formInfo[event.target.name] = event.target.value;*/
		formInfo[event.target.name] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
		this.props.changeForm({ ...formInfo });
	}

	render() {
		const { formInfo } = this.props;
		const { consent, social, firstName, lastName } = formInfo;

		return (
			<div className={`${classes.form} container`}>
				<h1>Step First </h1>

				<div>
					<input type={"checkbox"} name={"consent"} onChange={this.onInputChange} checked={consent}  />
					<label>Terms and Conditions</label>
				</div>

				<div>
					<label>Where did you know about us ?</label><br />
					<input type={"radio"} name={"social"} value={"facebook"} onChange={this.onInputChange} checked={social === "facebook"} />
					<label>facebook</label><br />
					<input type={"radio"} name={"social"} value={"twitter"} onChange={this.onInputChange} checked={social === "twitter"} />
					<label>twitter</label><br />
				</div>
				<div>
					<label>First Name</label>
					<input type={"text"} name={"firstName"} onChange={this.onInputChange} value={firstName} />
				</div>
				<div>
					<label>Last Name</label>
					<input type={"text"} name={"lastName"} onChange={this.onInputChange} value={lastName} />
				</div>
				<button className={"btn btn-warning"}><Link to={`/form`} >Back</Link></button>
				<button className={"btn btn-warning"} onClick={this.onClickNextButton}><Link to={`/form/stepLast`} >Next Step</Link></button>
			</div>
		);
	}
}

function mapStateToProps({ form }) {
	return {
		formInfo: form.formInfo
	};
}
export default connect(mapStateToProps, { ...formActions })(stepFirst);
