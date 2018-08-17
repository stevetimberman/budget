import React from 'react'
import CommonComponents from '../../common'
import TextField from '@material-ui/core/TextField';


const pay = ({
	  input,
	  label,
	  meta: { touched, error },
	  ...custom
	}) => (
	  <TextField
	  	label='Pay'
	    {...input}
	    {...custom}
	  />
	)

export default pay;