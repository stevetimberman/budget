import { request } from "../../utils/utils"
import jwt from 'jsonwebtoken'


export const FETCH_EXPENSES = "FETCH_EXPENSES"
export const FETCH_EXPENSES_SUCCESS = "FETCH_EXPENSES_SUCCESS"
export const FETCH_EXPENSES_ERROR400 = "FETCH_EXPENSES_ERROR400"
export const FETCH_EXPENSES_ERROR500 = "FETCH_EXPENSES_ERROR500"
export const FETCH_EXPENSES_FAILURE = "FETCH_EXPENSES_FAILURE"
export function fetchExpenses() {
  return function (dispatch) {
    let user_id = jwt.decode(localStorage.getItem('token')).user_id
    let url = "http://127.0.0.1:8000/money/api/expense/?user=" + user_id
    dispatch({type: FETCH_EXPENSES})
    return request(
      url, {},
      (json) => { dispatch({type: FETCH_EXPENSES_SUCCESS, res: json}) },
      (json) => { dispatch({type: FETCH_EXPENSES_ERROR400, res: json}) },
      (res) => { dispatch({type: FETCH_EXPENSES_ERROR500, res: res}) },
      (ex) => { dispatch({type: FETCH_EXPENSES_FAILURE, error: ex}) },
    )
  }
}
