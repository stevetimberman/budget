import React from 'react'
import TextField from '@material-ui/core/TextField';


const description = ({
	  input,
	  label,
	  meta: { touched, error },
	  ...custom
	}) => (
	  <TextField
	  	label='Description'
	    {...input}
	    {...custom}
	  />
	)

export default description