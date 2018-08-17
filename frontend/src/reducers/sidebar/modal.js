import * as modalActions from "../../actions/sidebar/modal"


const initialState = {
	isOpen: false,
	val: 0,           //value: 0 means expenses are open in the tab (thus open
}                     //the expenses form), and 1 means incomes tab is open




export default function data(state=initialState, action={}) {
  switch (action.type) {
  case modalActions.SET_VALUE:
    console.log('vallueee')
    console.log(action.payload)
    return {...state, val: action.payload}
  case modalActions.OPEN_MODAL:
    console.log("OPPPEN")
    console.log({...state, isOpen: true});
    return {...state, isOpen: true}
  case modalActions.CLOSE_MODAL:
    return {...state, isOpen: false}
  default:
    return state
  }
}



