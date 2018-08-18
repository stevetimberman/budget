import * as incomesData from "../../actions/sidebar/incomes"

const initialState = {
  isLoading: false,
  data: undefined,
}

export default function data(state=initialState, action={}) {
  switch (action.type) {
    case incomesData.FETCH_INCOMES:
      return {...state, isLoading: true}
    case incomesData.FETCH_INCOMES_SUCCESS:
      return {...state, isLoading: false, data: action.res}
    case incomesData.FETCH_INCOMES_ERROR400:
    case incomesData.FETCH_INCOMES_ERROR500:
    case incomesData.FETCH_INCOMES_FAILURE:
      return {...state, isLoading: false}
    default:
      return state
  }
}
