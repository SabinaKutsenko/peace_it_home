import { createReducer } from "redux-act";

import * as basketActions from "./basket.actions";

const initialState = {
	countOfProduct: 0,
};
// const reducer = {};
const reducer = {
	[basketActions.incrementBasket]: (state) => ({
		...state,
		countOfProduct: state.countOfProduct + 1
	}),
	[basketActions.decrementBasket]: (state) => ({
		...state,
		countOfProduct: state.countOfProduct - 1
	}),
};


export default createReducer(reducer, initialState);
