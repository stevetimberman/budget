import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import BudgetRegisterForm from '../../components/budget/budget-register-form'
import Navbar from '../navbar/navbar';
import Grid from '@material-ui/core/Grid';


class BudgetRegister extends Component {
   
    render() {
    	let { auth } = this.props;
        return (
		<div>
			<Grid container spacing={24} >
				<Grid item sm={12}><Navbar auth={auth}/></Grid>
				<Grid item sm={12}><Grid container justify={'center'}><h2>Please give us some more information to personalize your budget: </h2></Grid></Grid>
		        <Grid item sm={12}> <BudgetRegisterForm /> </Grid>
		    </Grid>
		</div>
        )
    }
}


function mapStateToProps(state) {
    return {
        auth: state.authReducer
    }
}

export default compose(connect(mapStateToProps))(BudgetRegister)

