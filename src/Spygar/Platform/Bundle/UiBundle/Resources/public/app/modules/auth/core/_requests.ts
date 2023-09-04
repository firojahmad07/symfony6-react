import axios from 'axios'
import {AuthModel, UserModel} from './_models'

const API_URL = 'https://preview.keenthemes.com/metronic8/laravel/api'

export const GET_USER_BY_ACCESSTOKEN_URL = `user/verify_token`
export const LOGIN_URL = `user/login`
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`

// Server should return AuthModel
export function login(username: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    username,
    password,
  })
}

// Server should return AuthModel
export function register(
  username: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    username,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is username in DB)
export function requestPassword(username: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    username,
  })
}

export function getUserByToken(token: string) {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  })
}
