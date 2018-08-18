import { post } from "../../utils/utils"
import jwt from 'jsonwebtoken'

export const POST_INCOME = "POST_INCOME"
export const POST_INCOME_SUCCESS = "POST_INCOME_SUCCESS"
export const POST_INCOME_ERROR400 = "POST_INCOME_ERROR400"
export const POST_INCOME_ERROR500 = "POST_INCOME_ERROR500"
export const POST_INCOME_FAILURE = "POST_INCOME_FAILURE"
export function postIncome(data) {
  return function (dispatch) {
    let url = "http://127.0.0.1:8000/money/api/expense/"
    let name = data.name
    let description = data.description
    let budget = data.budget
    let user_id = jwt.decode(localStorage.getItem('token')).user_id
    let new_data = { "name":name, "description":description, "budget":budget, "user":user_id}
    console.log(new_data)
    dispatch({type: POST_INCOME})
    return post(
      url, {}, data,
      (json) => {
        dispatch({type: POST_INCOME_SUCCESS, res: json});
      },
      (json) => { dispatch({type: POST_INCOME_ERROR400, res: json}) },
      (res) => { dispatch({type: POST_INCOME_ERROR500, res: res}) },
      (ex) => { dispatch({type: POST_INCOME_FAILURE, error: ex}) },
    )
  }
}