import { post } from "../../utils"
import jwt from 'jsonwebtoken'

export const REGISTER_BUDGET = "REGISTER_BUDGET"
export const REGISTER_BUDGET_SUCCESS = "REGISTER_BUDGET_SUCCESS"
export const REGISTER_BUDGET_ERROR400 = "REGISTER_BUDGET_ERROR400"
export const REGISTER_BUDGET_ERROR500 = "REGISTER_BUDGET_ERROR500"
export const REGISTER_BUDGET_FAILURE = "REGISTER_BUDGET_FAILURE"
export function registerBudget(data, callback) {
  return function (dispatch) {
    let url = "http://127.0.0.1:8000/money/api/budget/"
    let balance = parseInt(data.balance, 10)
    let save_percentage = parseInt(data.save_percentage, 10)
    let user_id = jwt.decode(localStorage.getItem('token')).user_id
    let new_data = { "balance":balance, "save_percentage":save_percentage, "user":user_id}
    console.log(new_data)
    dispatch({type: REGISTER_BUDGET})
    return post(
      url, {}, data,
      (json) => {
        dispatch({type: REGISTER_BUDGET_SUCCESS, res: json});
        callback();
      },
      (json) => { dispatch({type: REGISTER_BUDGET_ERROR400, res: json}) },
      (res) => { dispatch({type: REGISTER_BUDGET_ERROR500, res: res}) },
      (ex) => { dispatch({type: REGISTER_BUDGET_FAILURE, error: ex}) },
    )
  }
}