import { post } from "../../utils/utils"
import jwt from 'jsonwebtoken'

export const POST_EXPENSE = "POST_EXPENSE"
export const POST_EXPENSE_SUCCESS = "POST_EXPENSE_SUCCESS"
export const POST_EXPENSE_ERROR400 = "POST_EXPENSE_ERROR400"
export const POST_EXPENSE_ERROR500 = "POST_EXPENSE_ERROR500"
export const POST_EXPENSE_FAILURE = "POST_EXPENSE_FAILURE"
export function postExpense(data) {
  return function (dispatch) {
    let url = "http://127.0.0.1:8000/money/api/expense/"
    let name = data.name
    let description = data.description
    let cost = parseInt(data.cost, 10)
    let user_id = jwt.decode(localStorage.getItem('token')).user_id
    let new_data = { "name":name, "description":description, "cost":cost, "user":user_id}
    console.log(new_data)
    dispatch({type: POST_EXPENSE})
    return post(
      url, {}, new_data,
      (json) => {
        dispatch({type: POST_EXPENSE_SUCCESS, res: json});
      },
      (json) => { dispatch({type: POST_EXPENSE_ERROR400, res: json}) },
      (res) => { dispatch({type: POST_EXPENSE_ERROR500, res: res}) },
      (ex) => { dispatch({type: POST_EXPENSE_FAILURE, error: ex}) },
    )
  }
}