import React, {Component} from 'react';
import Navbar from '../navbar/navbar';
import * as Action from '../../actions/auth/logout'
import {compose} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import BudgetRegister from '../budget/budget-register'
import Grid from '@material-ui/core/Grid';



class LoggedOut extends Component {

  	componentDidMount() {
  		this.props.logOutAction();
  	}
    
    render() {
        let { auth } = this.props
        return (
          <div>
          	<Navbar auth={auth}/>
            <Grid container>
              <Grid item sm={12}><Grid container justify={'center'}><h3>Come back soon!</h3></Grid></Grid>
              <Grid item sm={12}><Grid container justify={'center'}><Link to='/login'> Click here to go back to the Login page! </Link></Grid></Grid>
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

export default compose(
  connect(mapStateToProps, Action)
  )
(LoggedOut)





