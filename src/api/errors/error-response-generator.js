const errorResponseGenerator = (error, response) => {
    response.status = false;
    if (error.response) {
        /*
        * The request was made and the server responded with a
        * status code that falls out of the range of 2xx
        */
        response.code = error.response.status;
        response.message = {
            path: error.response.request && error.response.request.path || "client request error",
            error: error.response.data && (error.response.data.message ? error.response.data.message : JSON.stringify(error.response.data))
        };

    } else {
        /*
        * The request was made but no response was received, `error.request`
        * is an instance of XMLHttpRequest in the browser and an instance
        * of http.ClientRequest in Node.js
        */
        /**
         * OR
         */
        /**
         * Something happened in setting up the request and triggered an Error
         */
        response.code = 404;
        response.message = {
            error: error.message
        };
    };
    return response;
};

module.exports = { 
    errorResponseGenerator, 
};
