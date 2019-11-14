import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export const displayAll = () => api.get('/shop')

const apis = {
    displayAll,
}

export default apis