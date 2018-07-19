import * as expensesData from "../../actions/sidebar/expenses"

const initialState = {
  isLoading: false,
  data: undefined,
}

export default function data(state=initialState, action={}) {
  switch (action.type) {
  case expensesData.FETCH_EXPENSES:
    return {...state, isLoading: true}
  case expensesData.FETCH_EXPENSES_SUCCESS:
    return {...state, isLoading: false, data: action.res}
  case expensesData.FETCH_EXPENSES_ERROR400:
  case expensesData.FETCH_EXPENSES_ERROR500:
  case expensesData.FETCH_EXPENSES_FAILURE:
    return {...state, isLoading: false}
  default:
    return state
  }
}