import React, {Component, Fragment} from 'react';
import CommonComponents from '../common';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form'
import password from './password'
import email from './email'


//needs a handleSubmit prop
class RegisterForm extends Component {
	onSubmit = formProps => {
			console.log(formProps);
	}

	render() {
		const { handleSubmit } = this.props;
		
		return (
			<div>
				<Grid container>
					<form onSubmit={handleSubmit(this.onSubmit)}>
						<Grid item>
							<Field
					          name="emailField"
					          label="Email"
					          component={email}
					          autoComplete='none'
					        />
						</Grid>
						<Grid item>	
							<Field
					          name="passwordField"
					          type='password'
					          label='Password'
					          component={password}
					          autoComplete='none'
					        />
					    </Grid>
					    <Grid item>    
							<CommonComponents.ContainedButton type="submit">Submit</CommonComponents.ContainedButton>
						</Grid>
					</form>
					
				</Grid>
			</div>
		)
	}
}

export default reduxForm({
  form: 'RegisterForm', // a unique identifier for this form
})(RegisterForm)