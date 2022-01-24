const fs = require('fs');
// Basically every module in file system
// comes in syncronous and asyncronous mode
// BEST PRACTICE: use asyncronous mode

// Now we show syncronous as it's easire to understand
const files = fs.readdirSync('./'); // returns an array of strings
//console.log(files);

// first argument is the path
// second argument is the callback function
//  -> function executed when the operation is complete
const filesAsync = fs.readdir('./', function (err, files) {
	if (err) console.log(`Error: ${err}`);
	else console.log(`Result: ${files}`);
});

console.log(filesAsync);
