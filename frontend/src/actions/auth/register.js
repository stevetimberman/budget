import { request } from "../../utils"

export const POST_REGISTER = "POST_REGISTER"
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS"
export const POST_REGISTER_ERROR400 = "POST_REGISTER_ERROR400"
export const POST_REGISTER_ERROR500 = "POST_REGISTER_ERROR500"
export const POST_REGISTER_FAILURE = "POST_REGISTER_FAILURE"
export default function postRegister(debate) {
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