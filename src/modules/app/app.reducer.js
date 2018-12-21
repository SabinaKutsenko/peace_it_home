import { createReducer } from "redux-act";

import * as appActions from "./app.actions";


const initialState = {
	name: "Vlad"
};
// const reducer = {};
const reducer = {
	[appActions.changeName]: (state, nameValue) => ({
		...state,
		name: nameValue
	}),
};


export default createReducer(reducer, initialState);
