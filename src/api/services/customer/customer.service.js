const ServiceError = require('../../errors/service-error.util');
const endpoints = require('./config/endpoints');
const axios = require('./config/axios');

const customerService = () => {

    const getMageId = async (customerId) => {
        try {
            const response = await axios.get(endpoints.GET_MAGEID(customerId));
            return response.data;
        } catch (error) {
            throw new ServiceError(error);
        };
    };

    return {
        getMageId,
    };
};

module.exports = customerService;
