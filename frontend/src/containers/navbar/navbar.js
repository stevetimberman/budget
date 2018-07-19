import React, {Component, Fragment} from 'react';
import CommonComponents from '../../components/common';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Nav from '../../components/navbar/nav'


export default class Navbar extends Component {


    render() {
        
        return (
            <div>
              	<Nav/>
            </div>
        )
    }
}