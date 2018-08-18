import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import CommonComponents from '../common';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form'
import password from './password'
import email from './email'
import username from './userfield'
import * as postRegister from '../../actions/auth/register'
import {withRouter} from 'react-router-dom'




//needs a handleSubmit prop
class RegisterForm extends Component {
	onSubmit = formProps => {
		this.props.postRegister(formProps, () => {
      		this.props.history.push('/register-budget');
    	});
	}

	render() {
		const { handleSubmit } = this.props;
		
		return (
			<div>
				<Grid container spacing={24}>
					<form onSubmit={handleSubmit(this.onSubmit)}>
						<Grid item sm={12}>
							<Field
					          name="username"
					          label="Username"
					          component={username}
					          autoComplete='none'
					        />
						</Grid>
						<Grid item sm={12}>
							<Field
					          name="email"
					          label="Email"
					          component={email}
					          autoComplete='none'
					        />
						</Grid>
						<Grid item sm={12}>	
							<Field
					          name="password"
					          type='password'
					          label='Password'
					          component={password}
					          autoComplete='none'
					        />
					    </Grid>
					    <h1></h1>
					    <Grid item sm={12}> 
					    	<Grid container justify={'flex-end'}>   
								<CommonComponents.ContainedButton type="submit" >Register</CommonComponents.ContainedButton>
							</Grid>
						</Grid>
					</form>
					
				</Grid>
			</div>
		)
	}
}


export default compose(
connect(null, postRegister),
reduxForm({form: 'RegisterForm', }),
withRouter,
)(RegisterForm)


