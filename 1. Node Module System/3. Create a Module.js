// 1. Create a class that extends the EventEmitter one
// 2. Add additional functionalities i.e. emit new events
// 3. Export the new Class
// 4. Use the new class when needed
const EventEmitter = require('events');

class Logger extends EventEmitter {
	log(message) {
		console.log(message);
		this.emit('messageLogged', { id: 1, url: 'http://' });
	}
}

module.exports = Logger;

// To export the url variable as endPoint
//module.exports.endPoint = url;

//console.log(module);
