import React from 'react'
import CommonComponents from './common'
import Sidebar from '../containers/sidebar/sidebar'
import Navbar from '../containers/navbar/navbar'
import Grid from '@material-ui/core/Grid';

export default () => {
	return (
		<div>
			<Grid item sm={12}><Navbar /></Grid> 
		</div>
	)
		;
}