import { request } from "../../utils"
import jwt from 'jsonwebtoken'


export const FETCH_INCOMES = "FETCH_INCOMES"
export const FETCH_INCOMES_SUCCESS = "FETCH_INCOMES_SUCCESS"
export const FETCH_INCOMES_ERROR400 = "FETCH_INCOMES_ERROR400"
export const FETCH_INCOMES_ERROR500 = "FETCH_INCOMES_ERROR500"
export const FETCH_INCOMES_FAILURE = "FETCH_INCOMES_FAILURE"
export function fetchIncomes(debate) {
  return function (dispatch) {
    let user_id = jwt.decode(localStorage.getItem('token')).user_id
    let url = "http://127.0.0.1:8000/money/api/income/?user=" + user_id
    console.log(url)
    dispatch({type: FETCH_INCOMES})
    return request(
      url, {},
      (json) => { dispatch({type: FETCH_INCOMES_SUCCESS, res: json}) },
      (json) => { dispatch({type: FETCH_INCOMES_ERROR400, res: json}) },
      (res) => { dispatch({type: FETCH_INCOMES_ERROR500, res: res}) },
      (ex) => { dispatch({type: FETCH_INCOMES_FAILURE, error: ex}) },
    )
  }
}