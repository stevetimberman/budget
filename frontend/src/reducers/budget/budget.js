import * as  from "../../actions/budget/budget-register"

const initialState = {
  isLoading: false,
  data: undefined,
}

export default function data(state=initialState, action={}) {
  switch (action.type) {
  case expensesData.FETCH_BUDGET:
    return {...state, isLoading: true}
  case expensesData.FETCH_BUDGET_SUCCESS:
    return {...state, isLoading: false, data: action.res}
  case expensesData.FETCH_BUDGET_ERROR400:
  case expensesData.FETCH_BUDGET_ERROR500:
  case expensesData.FETCH_BUDGET_FAILURE:
    return {...state, isLoading: false}
  default:
    return state
  }
}