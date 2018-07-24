import React, {Component, Fragment} from 'react';
import CommonComponents from '../../components/common';
import Navbar from '../navbar/navbar';
import requireAuth from '../../components/auth/require-auth'
import {connect} from 'react-redux';
import {compose} from 'redux';


class LoggedIn extends Component {
    
    render() {
    	let { auth } = this.props
        
        return (
          <div>
            <Navbar auth={auth} />
            <h2>Hello you are logged in!</h2>
          </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer
    }
}

export default compose(requireAuth, connect(mapStateToProps))(LoggedIn)




