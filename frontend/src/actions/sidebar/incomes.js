<<<<<<< HEAD
import { request } from "../../utils/utils"
import jwt from 'jsonwebtoken'

=======
import { request } from "../../utils"
>>>>>>> parent of 35ef6c7... budget form, modal, and expense form implemented... bugs exist, loads last users expenses and incomes until first reload when a user signs in

export const FETCH_INCOMES = "FETCH_INCOMES"
export const FETCH_INCOMES_SUCCESS = "FETCH_INCOMES_SUCCESS"
export const FETCH_INCOMES_ERROR400 = "FETCH_INCOMES_ERROR400"
export const FETCH_INCOMES_ERROR500 = "FETCH_INCOMES_ERROR500"
export const FETCH_INCOMES_FAILURE = "FETCH_INCOMES_FAILURE"
export function fetchIncomes(debate) {
  return function (dispatch) {
    let url = "http://127.0.0.1:8000/money/api/income/"
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
