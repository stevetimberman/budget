import React from 'react'
import CommonComponents from '../common'
import TextField from '@material-ui/core/TextField';


const balance = ({
	  input,
	  label,
	  ...custom
	}) => (
	  <TextField
	  	label='balance'
	  	type='number'
	  	helperText='Please put your initial balance'
	    {...input}
	    {...custom}
	  />
	)

export default balance