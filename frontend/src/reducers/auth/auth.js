import React from 'react'
import * as userData from "../../actions/auth/login"


const initialState = {
	isLoading: false,
	authenticated: "",
	errorMessage: "",
}




export default function data(state=initialState, action={}) {
  switch (action.type) {
  case userData.FETCH_USER:
    return {...state, isLoading: true}
  case userData.FETCH_USER_SUCCESS:
    return {...state, isLoading: false, data: action.res}
  case userData.FETCH_USER_ERROR400:
  case userData.FETCH_USER_ERROR500:
  case userData.FETCH_USER_FAILURE:
    return {...state, isLoading: false}
  default:
    return state
  }
}