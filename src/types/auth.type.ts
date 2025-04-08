export type TLogInRequest = {
  email: string
  password: string
}

export type TLogInResponse = {
  token: string
  user: TUser
}

export type TUser = {
  email: string
}
