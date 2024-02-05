import axios, { AxiosRequestHeaders } from 'axios'
import { useAuthStore } from '../store/auth'

const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

authApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token

  config.headers = {
    Authorization: `Bearer ${token}`,
  } as AxiosRequestHeaders
  return config
})

authApi.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      useAuthStore.getState().logout()
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)
export default authApi
