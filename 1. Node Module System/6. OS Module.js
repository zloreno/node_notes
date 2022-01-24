const os = require('os');

let freeMemory = os.freemem();
let totMemory = os.totalmem();

console.log(`Total Memoy: ${totMemory}
Free Memory: ${freeMemory}`);
