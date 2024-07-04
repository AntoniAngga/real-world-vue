import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/antoniangga/database-example',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvent() {
    return apiClient.get('/events')
  },
  getDetailEvent(id) {
    return apiClient.get(`/events/${id}`)
  }
}
