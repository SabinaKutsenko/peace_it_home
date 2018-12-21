import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { func, object } from "prop-types";

import Popup from 'react-popup';

import * as formActions from "../../../modules/form/form.actions";

import classes from "../Form.less";
import "../popup.css";


class FormLast extends Component {
	static propTypes = {
		changeForm: func,
		formInfo: object,
	}

	onInputChange = (event) => {
		const { formInfo } = this.props;
		/*const value = event.target.type === 'file' ? event.target.files : event.target.value;*/
		formInfo[event.target.name] = event.target.type === 'file' ? event.target.files[0].name : event.target.value;
		this.props.changeForm({ ...formInfo });
	}

	onSubmit = () => {
		const { formInfo } = this.props;
		const error = [];
		let i = 0;
		for (const key in formInfo) {
			if (formInfo.hasOwnProperty(key)) {
				if (formInfo[key] === "") {
					error[i] = `${key} is required`;
					i++;
				}
			}
		}
		console.log(error.length);
		if (error.length === 0) {
			return (Popup.alert(`Success!!! ${JSON.stringify(formInfo, null, 2)}`));
		}
		return (Popup.alert(`${JSON.stringify(error, null, 2)}`));
	}

	render() {
		const { formInfo } = this.props;
		const { email, password, color } = formInfo;
		console.log(formInfo);
		return (
			<div className={`${classes.form} container`}>
				<h1>Form with redux</h1>
				<div>
					<select name="color" value={color} onChange={this.onInputChange}>
						<option value={""}> Choose color</option>
						<option value="#ff0000">Red</option>
						<option value="#00ff00">Green</option>
						<option value="#0000ff">Blue</option>
					</select>
				</div>
				{/*<div>
					<input name="file" type="file" onChange={this.onInputChange} />
				</div>*/}
				<div>
					<label>Email</label>
					<input type={"email"} name={"email"} onChange={this.onInputChange} value={email} />
				</div>
				<div>
					<label>Password</label>
					<input type={"password"} name={"password"} onChange={this.onInputChange} value={password} />
				</div>
				<button className={"btn btn-warning"} onClick={this.onClickPrevButton}><Link to={`/form/stepFirst`} >Previous Step</Link></button>
				<button type="submit" className={"btn btn-success"} onClick={this.onSubmit} >Submit</button>
				<Popup />
			</div>
		);
	}
}

function mapStateToProps({ form }) {
	return {
		formInfo: form.formInfo
	};
}
export default connect(mapStateToProps, { ...formActions })(FormLast);
