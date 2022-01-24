function log(req, res, next) {
	console.log('Logging...');
	// Do not held up the request circle, go to the next function
	next();
}

module.exports = log;
