import React, {Component, Fragment} from 'react';
import CommonComponents from '../common';
import * as Action from '../../actions/auth/logout'
import {compose} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'


export default class LogoutButton extends Component {


    render () {
        return (
          <div>
            <CommonComponents.ContainedButton><Link to="/logged-out" >Log Out</ Link></ CommonComponents.ContainedButton>
          </ div>
        )
    }
}

