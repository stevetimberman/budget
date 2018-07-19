import React from 'react'
import CommonComponents from '../common'
import TextField from '@material-ui/core/TextField';


const password = ({
	  input,
	  label,
	  meta: { touched, error },
	  ...custom
	}) => (
	  <TextField
	  	label='Email'
	    hintText={label}
	    floatingLabelText={label}
	    errorText={touched && error}
	    {...input}
	    {...custom}
	  />
	)

export default password

