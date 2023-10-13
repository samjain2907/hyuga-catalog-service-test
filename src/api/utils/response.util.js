class Response {
	constructor(resource = 'DEFAULT', message = '', data = [], status = false, code) {
		this.resource = resource;
		this.status = status;
		this.code = code;
		this.message = message;
		this.data = data;
	};

	getStatus() {
		return this.status;
	};

	getCode() {
		return this.code;
	};

	getMessage() {
		return this.message;
	};

	getResource() {
		return this.resource;
	};

	getData() {
		return this.data;
	};

	setStatus(status) {
		this.status = status;
	};

	setCode(code) {
		this.code = code;
	};

	setMessage(message) {
		this.message = message;
	};

	setResource(resource) {
		this.resource = resource;
	};

	setData(data) {
		this.data = data;
	};

	setKey(key, value) {
		this[`${key}`] = value;
	};
};

module.exports = Response;
