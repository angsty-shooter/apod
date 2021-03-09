import axios from 'axios'

export const nasaApi = axios.create({
    baseURL: 'https://api.nasa.gov/planetary/apod?api_key=k6QgJmhHGVHXVpfXSXbbPZ3FrBzHwBbYjU6L4HG2',
    timeout: 3000
})