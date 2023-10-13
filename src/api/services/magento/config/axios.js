const axios = require('axios');
const { AUTH_TOKEN } = require('./config');
const { BASE_URL } = require('./endpoints');

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${AUTH_TOKEN}`,
        'Content-Type': 'application/json',
    },
});

module.exports = axiosInstance;
