import axios from 'axios'
import store from 'store'

import { setAccessToken } from 'store/features/auth.slice'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API + '/api',
  timeout: 10000,
})

axiosClient.interceptors.request.use(async (config) => {
  const token = await localStorage.getItem('accessToken')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

const resetLogin = () => {
  store.dispatch(setAccessToken(null))
  localStorage.clear()
}

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.request?.status === 401) {
      resetLogin()
    } else {
      throw error
    }
  }
)

export default axiosClient
