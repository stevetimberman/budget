import React from 'react'
import CommonComponents from '../../common'
import TextField from '@material-ui/core/TextField';


const name = ({
	  input,
	  label,
	  meta: { touched, error },
	  ...custom
	}) => (
	  <TextField
	  	label='Name'
	    {...input}
	    {...custom}
	  />
	)

export default name