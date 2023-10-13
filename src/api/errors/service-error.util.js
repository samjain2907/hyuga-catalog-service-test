class ServiceError extends Error {
    constructor(e) {
        super();
        this.stack = e.stack;
    };
};

module.exports = ServiceError;
