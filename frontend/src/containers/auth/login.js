import React, {Component, Fragment} from 'react';
import CommonComponents from '../../components/common';
import Navbar from '../navbar/navbar';
import Register from './register'
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {compose} from 'redux';

class Login extends Component {
    
    render() {
    	let { auth } = this.props
        return (
		<div>
			<Grid container spacing={24} >
		        <Grid item sm={12}>
		          <Navbar auth={auth}/>
		        </Grid>
				<Grid item sm={12}>
					<Register />
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

export default connect(mapStateToProps)(Login)


