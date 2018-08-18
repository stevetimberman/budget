<<<<<<< HEAD
<<<<<<< HEAD
import { request } from "../../utils/utils"
import jwt from 'jsonwebtoken'

=======
import { request } from "../../utils"
>>>>>>> parent of 35ef6c7... budget form, modal, and expense form implemented... bugs exist, loads last users expenses and incomes until first reload when a user signs in
=======
import { request } from "../../utils"
>>>>>>> parent of 35ef6c7... budget form, modal, and expense form implemented... bugs exist, loads last users expenses and incomes until first reload when a user signs in

export const FETCH_EXPENSES = "FETCH_EXPENSES"
export const FETCH_EXPENSES_SUCCESS = "FETCH_EXPENSES_SUCCESS"
export const FETCH_EXPENSES_ERROR400 = "FETCH_EXPENSES_ERROR400"
export const FETCH_EXPENSES_ERROR500 = "FETCH_EXPENSES_ERROR500"
export const FETCH_EXPENSES_FAILURE = "FETCH_EXPENSES_FAILURE"
export function fetchExpenses() {
  return function (dispatch) {
    let url = "http://127.0.0.1:8000/money/api/expense/"
    console.log(url)
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
