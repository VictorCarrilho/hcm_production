import axios from 'axios';

const api = axios.create({
    baseURL: 'http://srvtvthom002:9000/'
})

export default api;