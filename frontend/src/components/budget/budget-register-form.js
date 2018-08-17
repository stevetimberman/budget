import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import CommonComponents from '../common';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form'
import balance from './balance'
import savePercentage from './save-percentage'
import * as postBudget from '../../actions/budget/budget-register'
import {withRouter} from 'react-router-dom'


//needs a handleSubmit prop
class BudgetRegisterForm extends Component {
	onSubmit = formProps => {
			this.props.registerBudget(formProps, () => {
				this.props.history.push('/');
			});
	}

	render() {
		const { handleSubmit } = this.props;
		
		return (
			<div>
				<Grid container spacing={24} justify={'center'}>
					<form onSubmit={handleSubmit(this.onSubmit)}>
						<Grid item sm={12}>
							<Field
					          name="balance"
					          label="Balance"
					          component={balance}
					          type='number'
					          autoComplete='none'
					        />
						</Grid>
						<Grid item sm={12}>	
							<Field
					          name="save_percentage"
					          label='Save Percentage'
					          component={savePercentage}
					          type='number'
					          autoComplete='none'
					        />
					    </Grid>
					    <h1></h1>
					    <Grid item sm={12}>
					    	<Grid container justify={'flex-end'} spacing={24}>    
								<CommonComponents.ContainedButton type="submit" >Submit</CommonComponents.ContainedButton>
							</Grid>
						</Grid>
					</form>
					
				</Grid>
			</div>
		)
	}
}

export default compose(
	connect(null, postBudget),
	reduxForm({form: 'RegisterForm',}),
	withRouter,
	)(BudgetRegisterForm)





