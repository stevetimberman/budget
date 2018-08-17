import * as userData from "../../actions/auth/login"
import * as logout from "../../actions/auth/logout"


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
    return {...state, isLoading: false, authenticated: action.res}
  case userData.FETCH_USER_ERROR400:
  case userData.FETCH_USER_ERROR500:
  case userData.FETCH_USER_FAILURE:
    return {...state, isLoading: false}
  case logout.LOGOUT:
  	return {...state, isLoading: false, authenticated: ""}
  default:
    return state
  }
}



