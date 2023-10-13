// Customer Service Endpoints.

module.exports = {
    BASE_URL: process.env.CUSTOMER_SERVICE_URL,
    GET_MAGEID: customerId => `/customer/id/${customerId}/mageId`,
};
