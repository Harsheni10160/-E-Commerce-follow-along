import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true, // This is important for sending cookies with requests
});

export default instance;