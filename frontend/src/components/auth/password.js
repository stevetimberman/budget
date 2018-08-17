import React from 'react'
import TextField from '@material-ui/core/TextField';


const password = ({
	  input,
	  label,
	  meta: { touched, error },
	  ...custom
	}) => (
	  <TextField
	  	label='Password'
	    {...input}
	    {...custom}
	  />
	)

export default password

