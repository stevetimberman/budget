import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import CommonComponents from '../common';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form'
import name from './fields/name'
import description from './fields/description'
import cost from './fields/cost'
import * as postExpense from '../../actions/sidebar/expense-post'
import {withRouter} from 'react-router-dom'




//needs a handleSubmit prop
class ExpenseForm extends Component {
	onSubmit = formProps => {
		this.props.postExpense(formProps);
	}

	render() {
		const { handleSubmit } = this.props;
		
		return (
			<div>
				<Grid container spacing={24}>
					<form onSubmit={handleSubmit(this.onSubmit)}>
						<Grid item sm={12}>
							<Field
					          name="name"
					          label="Name"
					          component={name}
					          autoComplete='none'
					        />
						</Grid>
						<Grid item sm={12}>
							<Field
					          name="description"
					          label="Description"
					          component={description}
					          autoComplete='none'
					        />
						</Grid>
						<Grid item sm={12}>	
							<Field
					          name="cost"
					          type='number'
					          label='Cost'
					          component={cost}
					          autoComplete='none'
					        />
					    </Grid>
					    <h1></h1>
					    <Grid item sm={12}> 
					    	<Grid container justify={'flex-end'}>   
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
connect(null, postExpense),
reduxForm({form: 'ExpenseForm', }),
withRouter,
)(ExpenseForm)