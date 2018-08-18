import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import {Provider} from 'react-redux';
import {createStore,compose,applyMiddleware,} from 'redux';
import reduxThunk from "redux-thunk";
import logger from 'redux-logger'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './containers/auth/login';
import LoggedIn from './containers/auth/logged-in';
import BudgetRegister from './containers/budget/budget-register'
import LoggedOut from './containers/auth/logged-out';

import App from './components/app';
import allReducers from './reducers/allReducers';

const store = createStore(
  allReducers, 
  {
    authReducer: { authenticated: localStorage.getItem('token') },
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
	(
		<Provider store={store}>
			<BrowserRouter>
				<App >
					<Route path="/" exact component={ LoggedIn }/>
		          	<Route path="/login" component={ Login }/>
		          	<Route path="/logged-out" component={ LoggedOut }/>
		          	<Route path="/register-budget" component={BudgetRegister}/>
		        </ App>
			</ BrowserRouter>
		</ Provider>
	),
	document.getElementById('root')
);











