import axios from 'axios'

export const api_server = axios.create({
    baseURL: 'http://localhost:3333/'
})

export const api_coinGecko = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/'
})