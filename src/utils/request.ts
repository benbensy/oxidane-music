import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:45141',
})

export {
  client,
}
