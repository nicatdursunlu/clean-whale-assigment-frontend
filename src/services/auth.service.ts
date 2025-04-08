import { TLogInRequest, TLogInResponse } from 'types/auth.type'
import axiosClient from './_axios'

export const logIn = (form: TLogInRequest) => {
  return axiosClient
    .post(`auth/login`, form)
    .then((response) => response.data as TLogInResponse)
}
