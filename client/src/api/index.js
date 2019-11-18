import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const displayAll = () => api.get('/shop/data')

const apis = {
    displayAll,
}

export default apis