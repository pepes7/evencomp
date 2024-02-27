import axios from 'axios'
import { getToken } from './auth'

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: { 'X-Custom-Header': 'foobar' },
})

api.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'
api.interceptors.request.use(
  async (config) => {
    const accessToken = getToken()
    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default api 
