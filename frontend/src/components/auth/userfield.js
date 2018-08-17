import React from 'react'
import CommonComponents from '../common'
import TextField from '@material-ui/core/TextField';


const username = ({
	  input,
	  label,
	  meta: { touched, error },
	  ...custom
	}) => (
	  <TextField
	  	label='Username'
	    {...input}
	    {...custom}
	  />
	)

export default username