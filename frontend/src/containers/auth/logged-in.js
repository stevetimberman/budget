import React, {Component, Fragment} from 'react';
import CommonComponents from '../../components/common';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import ProtectedComponent from '../../components/auth/require-auth'
import {connect} from 'react-redux';
import {compose} from 'redux';
import Grid from '@material-ui/core/Grid';


class LoggedIn extends Component {
  

    render() {
    	let { auth } = this.props
        
        return (
          <div>
            <Grid container>
                <Grid item sm={12}>
                    <Navbar auth={auth} />
                </Grid>
                <Grid item sm={4}>
                    <Sidebar />
                </Grid>
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

export default compose(ProtectedComponent, connect(mapStateToProps))(LoggedIn)




