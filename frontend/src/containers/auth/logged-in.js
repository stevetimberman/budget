import React, {Component} from 'react';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import ProtectedComponent from '../../components/auth/require-auth'
import {connect} from 'react-redux';
import {compose} from 'redux';
import Grid from '@material-ui/core/Grid';
import ModalContainer from '../../containers/sidebar/modal';
import jwt from 'jsonwebtoken'


class LoggedIn extends Component {
  

    render() {
    	let { auth } = this.props;
        let username = jwt.decode(localStorage.getItem('token')).username

        return (
          <div>
            <Grid container>
                <Grid item sm={12}>
                    <Navbar auth={auth} />
                </Grid>
                <Grid item sm={4} >
                    <Sidebar />
                </Grid>
                <Grid item sm={8} >
                    <Grid container justify={'center'}><h3>Welcome {username}</h3></Grid>
                </Grid>
                <ModalContainer />
            </Grid>
          </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer,
    }

}

export default compose(ProtectedComponent, connect(mapStateToProps))(LoggedIn)




