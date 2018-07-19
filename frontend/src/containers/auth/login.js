import React, {Component, Fragment} from 'react';
import CommonComponents from '../../components/common';
import LoginForm from '../../components/auth/login-form';


export default class Login extends Component {
    
    render() {
        
        return (
          <div>
            <LoginForm />
          </div>
        )
    }
}