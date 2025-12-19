import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
})

apiClient.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export default apiClient

