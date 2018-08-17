import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LoginForm from './login-form'
import LogoutButton from './logout-button'


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};



function Nav(props) {
  const { classes, auth } = props;

  function isLoggedIn(auth) {
    if (auth.authenticated){
      return <LogoutButton />
    }else {return <LoginForm />}
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Budget
          </Typography>
          {isLoggedIn(auth)}
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default compose(
withStyles(styles)
)(Nav);


















