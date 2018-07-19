import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import {Provider} from 'react-redux';
import {createStore,compose,applyMiddleware,} from 'redux';
import thunk from "redux-thunk";

import App from './components/app';
import allReducers from './reducers';

const store = createStore(
	allReducers, 
	{
		authReducer: {authenticated : localStorage.getItem('token') }
	},
	compose(
		applyMiddleware(thunk)
	)
)


ReactDOM.render(
	(
		<Provider store={store}>
			<App />
		</Provider>
	),
	document.getElementById('root')
);
