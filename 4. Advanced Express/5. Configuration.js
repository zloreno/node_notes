const config = require('config');
const debug = require('debug');

console.log(process.env.NODE_ENV);
console.log(`Application Name: ${config.get('name')}`);
console.log(`Application Host Server: ${config.get('mail.host')}`);
console.log(`Application Password: ${config.get('mail.pw')}`);
