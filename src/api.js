import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    headers: {
        Authorization: 'Bearer 5b52f275a8b2159703b1dc8ba57a0a5a'
    }
})