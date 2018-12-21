import { createReducer } from "redux-act";

import * as formActions from "./form.actions";

const initialState = {
	formPage: 0,
	email: 3,
	formInfo: {
		consent: "",
		social: "",
		firstName: "",
		lastName: "",
		color: "",
		/*file: "",*/
		email: "",
		password: ""
	},
};
// const reducer = {};
const reducer = {
	[formActions.changeForm]: (state, formInfoValue) => ({
		...state,
		formInfo: formInfoValue
	}),
	[formActions.nextStepForm]: (state) => ({
		...state,
		formPage: state.formPage + 1,
	}),
	[formActions.prevStepForm]: (state) => ({
		...state,
		formPage: state.formPage - 1,
	}),
};


export default createReducer(reducer, initialState);
