import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import expensesReducer from './sidebar/expenses'
import incomesReducer from './sidebar/incomes'
import authReducer from './auth/auth'
import modalReducer from './sidebar/modal'



const allReducers = combineReducers({
	formReducer,
    expensesReducer,
    incomesReducer,
    authReducer,
    modalReducer,
});

export default allReducers;
