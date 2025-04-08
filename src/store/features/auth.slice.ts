import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TUser } from 'types/auth.type'

type AuthState = {
  accessToken: string | null
  user: TUser
}

const initialState: AuthState = {
  accessToken: null,
  user: {} as TUser,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload
    },
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload
      action.payload && localStorage.setItem('accessToken', action.payload)
    },
    logOut: (state) => {
      state.accessToken = null
      state.user = {} as TUser
      localStorage.clear()
    },
  },
})

export const { logOut, setAccessToken, setUserInfo } = authSlice.actions
export default authSlice.reducer
