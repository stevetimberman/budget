import React from 'react'
import TextField from '@material-ui/core/TextField';


const savePercentage = ({
	  input,
	  label,
	  meta: { touched, error },
	  ...custom
	}) => (
	  <TextField
	  	label='Save Percentage'
	  	type='number'
	  	helperText='0-100'
	    {...input}
	    {...custom}
	  />
	)

export default savePercentage