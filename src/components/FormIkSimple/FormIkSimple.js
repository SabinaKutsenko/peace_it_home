import React, { Component } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { DisplayFormikState } from './helper';

import classes from "./FormIkSimple.less";

class FormIkSimple extends Component {
	render() {
		return (
			<div className={"container"}>
				<h1>FormIk</h1>
				<Formik

					initialValues={{ firstName: '', lastName: '', email: '' }}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 500);
					}}
					validationSchema={Yup.object().shape({
						firstName: Yup.string()
							.min(2, "C'mon, your name is longer than that")
							.required('First name is required.'),
						lastName: Yup.string()
							.min(2, "C'mon, your name is longer than that")
							.required('Last name is required.'),
						email: Yup.string()
							.email("That's not an email")
							.required('Required'),
					})}
				>
					{(props) => {
						const {
							values,
							touched,
							errors,
							dirty,
							isSubmitting,
							handleChange,
							handleBlur,
							handleSubmit,
							handleReset,
						} = props;
						return (
							<form onSubmit={handleSubmit}>
								<label htmlFor="firstName" style={{ display: 'block' }}>
									First Name
								</label>
								<input
									id="firstName"
									type="text"
									label="First Name"
									placeholder="Sabina"
									error={touched.firstName && errors.firstName}
									value={values.firstName}
									onChange={handleChange}
									onBlur={handleBlur}
									className={
										errors.firstName && touched.firstName ? 'form-control error' : 'form-control'
									}
								/>
								{errors.firstName &&
								touched.firstName && <div className="input-feedback">{errors.firstName}</div>}
								<label htmlFor="lastName" style={{ display: 'block' }}>
									Last Name
								</label>
								<input
									id="lastName"
									type="text"
									label="Last Name"
									placeholder="Kutsenko"
									error={touched.lastName && errors.lastName}
									value={values.lastName}
									onChange={handleChange}
									onBlur={handleBlur}
									className={
										errors.lastName && touched.lastName ? 'form-control error' : 'form-control'
									}
								/>
								{errors.lastName &&
								touched.lastName && <div className="input-feedback">{errors.lastName}</div>}

								<label htmlFor="email" style={{ display: 'block' }}>
									Email
								</label>
								<input
									id="email"
									placeholder="Enter your email"
									type="text"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
									className={
										errors.email && touched.email ? 'form-control error' : 'form-control'
									}
								/>
								{errors.email &&
								touched.email && <div className="input-feedback">{errors.email}</div>}
								<br /><br />
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
									disabled={isSubmitting}
									className="btn btn-primary"
								>
									Submit
								</button>

								<DisplayFormikState {...props} />
								{/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
							</form>
						);
					}}
				</Formik>


			</div>
		);
	}
}

export default FormIkSimple;
