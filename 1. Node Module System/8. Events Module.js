// important: EventEmitter
// Class contaning relevant methods and properties
//const EventEmitter = require('events');

const Logger = require('./3. Create a Module');
let logger = new Logger();

// Set up a listener for events
logger.on('messageLogged', (e) => console.log('Listener Called', e));

// In logger.log there is the .emit() function that *emits* the event
logger.log('message');
