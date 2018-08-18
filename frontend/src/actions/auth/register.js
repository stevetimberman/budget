import { postLogin } from "../../utils/utils"
import * as action from './login'
import jwt from 'jsonwebtoken'


export const POST_REGISTER = "POST_REGISTER"
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS"
export const POST_REGISTER_ERROR400 = "POST_REGISTER_ERROR400"
export const POST_REGISTER_ERROR500 = "POST_REGISTER_ERROR500"
export const POST_REGISTER_FAILURE = "POST_REGISTER_FAILURE"
export function postRegister(data, callback) {
    return function (dispatch) {
        let url = "http://127.0.0.1:8000/authentication/api/register/"
        let username = data.username
        let password = data.password
        console.log(data)
        dispatch({type: POST_REGISTER})
        return postLogin(
            url, {}, data,
            (json) => {
                dispatch({type: POST_REGISTER_SUCCESS, res: json});
                dispatch(fetchUser({username:username, password:password}));
                callback();
                },
            (json) => { dispatch({type: POST_REGISTER_ERROR400, res: json}) },
            (res) => { dispatch({type: POST_REGISTER_ERROR500, res: res}) },
            (ex) => { dispatch({type: POST_REGISTER_FAILURE, error: ex}) },
        )
    }
}

export const FETCH_USER = "FETCH_USER"
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
export const FETCH_USER_ERROR400 = "FETCH_USER_ERROR400"
export const FETCH_USER_ERROR500 = "FETCH_USER_ERROR500"
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE"
export function fetchUser(data) {
  return function (dispatch) {
    let url = "http://127.0.0.1:8000/api-token-obtain/"
    console.log('hi there')
    dispatch({type: FETCH_USER})
    return postLogin(
      url, {}, data,
      (json) => { 
        dispatch({type: FETCH_USER_SUCCESS, res: json});
        console.log(json.token)
        localStorage.setItem('token', json.token);
        
      },
      (json) => { dispatch({type: FETCH_USER_ERROR400, res: json}) },
      (res) => { dispatch({type: FETCH_USER_ERROR500, res: res}) },
      (ex) => { dispatch({type: FETCH_USER_FAILURE, error: ex}) },
    )
  }
}