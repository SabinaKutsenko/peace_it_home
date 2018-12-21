import React, { Component } from 'react';

import { Field, Formik } from 'formik';

import { array, func, object } from "prop-types";

import * as Yup from 'yup';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

import classes from "./FormIk.less";

// Checkbox input
const Checkbox = ({
	field: { name, value, onChange, onBlur },
	id,
	label,
	className,
	...props
}) => {
	return (
		<div>
			<input
				name={name}
				id={id}
				type="checkbox"
				value={value}
				checked={value}
				onChange={onChange}
				onBlur={onBlur}
				className={className}
				{...props}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	);
};

// Radio input
const RadioButton = ({
	field: { name, value, onChange, onBlur },
	id,
	label,
	className,
	...props
}) => {
	return (
		<div>
			<input
				name={name}
				id={id}
				type="radio"
				value={id} // could be something else for output?
				checked={id === value}
				onChange={onChange}
				onBlur={onBlur}
				className={className}
				{...props}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	);
};


const Error = ({ name }) => (
	<Field
		name={name}
		render={({ form: { touched, errors } }) =>
			touched[name] && errors[name] ? <div>{errors[name]}</div> : null
		}
	/>
);

class Wizard extends Component {
	static propTypes = {
		children: array,
		initialValues: object,
		onSubmit: func
	}
	static Page = ({ children, parentState }) => <div className="step">{children(parentState)}</div>;

	constructor(props) {
		super(props);
		this.state = {
			page: 0,
			values: props.initialValues
		};
	}

	next = (values) =>
		this.setState((state) => ({
			page: Math.min(state.page + 1, this.props.children.length - 1),
			values
		}));

	previous = () =>
		this.setState((state) => ({
			page: Math.max(state.page - 1, 0)
		}));

	validate = (values) => {
		const activePage = React.Children.toArray(this.props.children)[
			this.state.page
		];
		return activePage.props.validate ? activePage.props.validate(values) : {};
	};

	handleSubmit = (values, bag) => {
		const { children, onSubmit } = this.props;
		const { page } = this.state;
		const isLastPage = page === React.Children.count(children) - 1;
		if (isLastPage) {
			return onSubmit(values);
		}
		this.next(values);
		bag.setSubmitting(false);
	};

	render() {
		const { children } = this.props;
		const { page, values } = this.state;

		/*const childrenWithState = React.Children.map(children, (child) => {
			return React.cloneElement(child, { parentState: this.state });
		});*/
		/*const activePage = React.Children.toArray(childrenWithState)[page];*/

		const activePage = React.Children.toArray(children)[page];
		const isLastPage = page === React.Children.count(children) - 1;

		return (
			<Formik
				validationSchema={Yup.object().shape({
					singleCheckbox: Yup.bool().oneOf([true], "Must agree to something"),
					firstName: Yup.string()
						.min(2, "C'mon, your name is longer than that")
						.required('First name is required.'),
					lastName: Yup.string()
						.min(2, "C'mon, your name is longer than that")
						.max(20, "C'mon, your name is shorter than that")
						.required('Last name is required.'),
					email: Yup.string()
						.email("That's not an email")
						.required('Email is required'),
					favoriteColor: Yup.string()
						.min(2, "C'mon, make a choice please")
						.required('Color is required'),
					password: Yup.string()
						.min(6, 'Password has to be longer than 6 characters!')
						.required('Password is required!'),
					passwordConfirmation: Yup.string()
						.oneOf([values.password], 'Passwords are not the same!')
						.required('Password confirmation is required!'),
					consent: Yup.bool()
						.test(
							'consent',
							'You have to agree with our Terms and Conditions!',
							(value) => value === true
						)
						.required(
							'You have to agree with our Terms and Conditions!'
						),
				})}

				initialValues={values}
				enableReinitialize={false}
				validate={this.validate}
				onSubmit={this.handleSubmit}
				render={({ values, handleSubmit, isSubmitting, handleReset, dirty }) => (

					<form onSubmit={handleSubmit}>
						{/*{activePage}*/}
						{React.cloneElement(activePage, { parentState: { values } })}
						{/*{React.cloneElement(activePage, { children: { ...props.children, parentState: { ...props } } })}*/}
						<div className="buttons">
							{page > 0 && (
								<button
									type="button"
									onClick={this.previous}
									className="btn btn-danger"
								>
									« Previous Step
								</button>
							)}

							{!isLastPage &&
							<button
								type="button"
								onClick={this.next}
								className="btn btn-danger"
							>
								Next Step »
							</button>
							}
							{isLastPage && (
								<>
									<button
										type="button"
										className="outline btn"
										onClick={handleReset}
										disabled={!dirty || isSubmitting}
									>
										Reset
									</button>
									<button
										type="submit"
										className="btn btn-primary"
										disabled={isSubmitting}
									>
										Submit
									</button>
								</>
							)}
						</div>

						<pre>{JSON.stringify(values, null, 2)}</pre>
					</form>
				)}
			/>
		);
	}
}

class FormIk extends Component {
	render() {
		return (
			<div className={`${classes.formIk} container`}>
				<h1>Multistep / Form Wizard </h1>
				<Wizard

					initialValues={{
						test: '',
						/*social: [],*/
						/*social: {
							facebook: '',
							twetter: '',
						},*/
						social: '',
						consent: false,
						firstName: "",
						lastName: "",
						email: "",
						favoriteColor: "",
						password: "",
						passwordConfirmation: ""
					}}
					onSubmit={(values, actions) => {
						console.log(actions);
						sleep(300).then(() => {
							window.alert(JSON.stringify(values, null, 2));
						});
					}}
				>
					<Wizard.Page>
						{() => (
							<>
								<div>
									<Field
										name={"consent"}
										id={"consent"}
										component={Checkbox}
										label="Terms and Conditions"
										className={"form-check-input"}
									/>
									<Error name={"consent"} />
								</div>
								<div>
									<label>Where did you know about us ?</label>
									<Field
										name={"social"}
										id={"facebook"}
										component={RadioButton}
										label="facebook"
										className={"form-check-input"}
									/>
									<Field
										name={"social"}
										id={"tweeter"}
										component={RadioButton}
										label="tweeter"
										className={"form-check-input"}
									/>
									<Error name={"consent"} />
								</div>

								<div>
									<label>First Name</label>
									<Field
										name={"firstName"}
										component={"input"}
										type={"text"}
										placeholder={"First Name"}
										className={"form-control"}
									/>
									<Error name="firstName" />
								</div>
								<div>
									<label>Last Name</label>
									<Field
										name={"lastName"}
										component={"input"}
										type={"text"}
										placeholder={"Last Name"}
										className={"form-control"}
									/>
									<Error name="lastName" />
								</div>
							</>
						)}
					</Wizard.Page>
					<Wizard.Page>
						{() => (
							<>
								<div>
									<label>Email</label>
									<Field
										name={"email"}
										component={"input"}
										type={"email"}
										placeholder={"Email"}
										className={"form-control"}
									/>
								</div>
								<div>
									<label>Favorite Color</label>
									<Field name={"favoriteColor"} component={"select"} className={"form-control"}>
										<option />
										<option value="#ff0000">Red</option>
										<option value="#00ff00">Green</option>
										<option value="#0000ff">Blue</option>
									</Field>
								</div>
								<div>
									<label>Password</label>
									<Field
										name="password"
										component="input"
										type="password"
										placeholder="Password"
										className={"form-control"}
									/>
								</div>
								<div>
									<label>Repeat Password</label>
									<Field
										name="passwordConfirmation"
										component="input"
										type="password"
										placeholder="Repeat Password"
										className={"form-control"}
									/>
								</div>
								<div>
									<Error name="singleCheckbox" />
									<Error name="consent" />
									<Error name="firstName" />
									<Error name="lastName" />
									<Error name="email" />
									<Error name="favoriteColor" />
									<Error name="password" />
									<Error name="passwordConfirmation" />
								</div>
							</>
						)}
					</Wizard.Page>
				</Wizard>
			</div>
		);
	}
}

export default FormIk;
