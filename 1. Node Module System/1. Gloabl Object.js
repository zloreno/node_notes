// Console object is a global object (globally available)
console.log('cose');
// Same thing as
global.console.log('cose');

// Variables are file-scoped objects
// so they are not accessible via the global object
var message = '';
console.log(global.message); // undefined

// That is because of Node Modular System
