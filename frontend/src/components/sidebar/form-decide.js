import React, { Component } from 'react';
import ExpenseForm from './expense-form'
import IncomeForm from './income-form'

export default class FormDecide extends Component {
	
	decide (val) {
		
		if (val == 0) {
			return (
				<div>
					<h2>Add an expense!</h2>
					<ExpenseForm />
				</div>
				)
		} return (
				<div>
					<h2>Add an income!</h2>
					<IncomeForm />
				</div>
				)
	}

	render () {
		let {val} = this.props;
		return this.decide(val);
	}
} 