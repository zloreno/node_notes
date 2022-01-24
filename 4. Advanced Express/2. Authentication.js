function authenticatingFunction(req, res, next) {
	console.log('Authenticating...');
	// Do not held up the request circle, go to the next function
	next();
}

module.exports = authenticatingFunction;
