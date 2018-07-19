import React, {Component, Fragment} from 'react';
import CommonComponents from '../../components/common';
import RegisterForm from '../../components/auth/register-form';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class Register extends Component {
    
    render() {
        
        return (
          <div>
              <RegisterForm/>
          </div>
        )
    }
}