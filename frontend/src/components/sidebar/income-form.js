import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import CommonComponents from '../common';
import Grid from '@material-ui/core/Grid';
import { Field, reduxForm } from 'redux-form'
import name from './fields/name'
import description from './fields/description'
import pay from './fields/pay'
import * as postIncome from '../../actions/sidebar/income-post'
import {withRouter} from 'react-router-dom'




//needs a handleSubmit prop
class IncomeForm extends Component {
	onSubmit = formProps => {
		this.props.postRegister(formProps);
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
					          name="pay"
					          type='number'
					          label='Pay'
					          component={pay}
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
connect(null, postIncome),
reduxForm({form: 'IncomeForm', }),
withRouter,
)(IncomeForm)