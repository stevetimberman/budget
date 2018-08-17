import React, {Component} from 'react';
import CommonComponents from '../../components/common';
import RegisterForm from '../../components/auth/register-form';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Grid from '@material-ui/core/Grid';



export default class Register extends Component {
    
    render() {
        
        return (
            <Grid container justify={'center'}>
	          	<Grid item sm={12}>
	          		<h2>Welcome!</h2>
	          	</ Grid>
	            <Grid item sm={12}>
	            	<RegisterForm/>
	            </Grid>
            </ Grid>
        )
    }
}