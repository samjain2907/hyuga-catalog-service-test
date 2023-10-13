const axios = require('axios');
const { BASE_URL } = require('./endpoints');

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

module.exports = axiosInstance;
