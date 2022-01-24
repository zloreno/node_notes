function log(req, res, next) {
	console.log('Logger');
	// Do not held up the request circle, go to the next function
	next();
}

module.exports = log;
