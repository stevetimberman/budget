import React, {Component, Fragment} from 'react';
import CommonComponents from '../components/common';
import { Route, Switch } from 'react-router-dom';
import Login from './auth/login';
import LoggedIn from './auth/logged-in';
import LoggedOut from './auth/logged-out';
import {connect} from 'react-redux';
import {compose} from 'redux';


class Root extends Component {

	renderLoading () {
		return <CommonComponents.CircularProgressBasic />

	}

    render() {
        let { auth } = this.props;
        console.log(auth);
        return (
            <div>

              	<Route path="/" exact render={ (props) => <LoggedIn {...props} auth={auth}/> }/>
	          	<Route path="/login" render={ (props) => <Login {...props} auth={auth}/> }/>
	          	<Route path="/logged-out" render={ (props) => <LoggedOut {...props} auth={auth}/> }/>
	          	
	        
            </div>
        )
    
        
    }
}



function mapStateToProps(state) {
    return {
        auth: state.authReducer
    }
}

export default connect(mapStateToProps)(Root)

