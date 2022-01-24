const config = require('config');
// When we require debug we also define an arbitrary namespace
// for the given debug operation
// If we set DEBUG (an environment varaibale) to any of the namespaces that we have defined when we require debug, then only the predefined sections of the code will be executed
// $env DEBUG="app:dev,app:db" works if you want to be specific
// Alternatively you can use the *
// $env:DEBUG="app:*"
const devDebugger = require('debug')('app:dev');
const dbDebugger = require('debug')('app:db');

if (process.env.NODE_ENV == 'development') devDebugger('We are in development');

dbDebugger('we are now debugging the database');

console.log(`Application Name: ${config.get('name')}`);
console.log(`Application Host Server: ${config.get('mail.host')}`);
console.log(`Application Password: ${config.get('mail.pw')}`);
