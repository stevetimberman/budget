import React from 'react'
import TextField from '@material-ui/core/TextField';


const cost = ({
	  input,
	  label,
	  meta: { touched, error },
	  ...custom
	}) => (
	  <TextField
	  	label='Cost'
	    {...input}
	    {...custom}
	  />
	)

export default cost