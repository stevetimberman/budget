import React from 'react'
import TextField from '@material-ui/core/TextField';


const hours = ({
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

export default hours