import React, {Component, Fragment} from 'react';
import CommonComponents from '../../components/common';
import Navbar from '../navbar/navbar';
import * as Action from '../../actions/auth/logout'
import {compose} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'


class LoggedOut extends Component {

  	componentDidMount() {
  		this.props.logOutAction();
      console.log('hehy there')
  	}
    
    render() {
        let { auth } = this.props
        return (
          <div>
          	<Navbar auth={auth}/>
            <Link to='/login'> Click here to go back to the Login page! </Link>
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





