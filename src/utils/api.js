import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
    // baseURL: 'https://user-generator-pro-7aad226ca74e.herokuapp.com'
});

export default api;