// Useful for networking applications nad backend services

const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('Hello World');
		res.end();
	}
	if (req.url === '/courses') {
		res.write('Courses');
		res.end;
	}
});

//server.on('connection', (socket) => console.log('New Connection'));

server.listen(3000);
console.log('Listening on port 3000');
