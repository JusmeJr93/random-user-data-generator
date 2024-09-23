import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
    // baseURL: 'backend deployed link to replace the previous'
});

export default api;