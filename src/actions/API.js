import axios from 'axios'
import { API_URL } from '../configs/constants'

const API = axios.create({
  baseURL: API_URL,
})

API.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error.response)
  },
)

export default API
