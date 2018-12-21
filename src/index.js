import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./modules/store";
import { Provider } from "react-redux";

import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
document.getElementById('root'));
