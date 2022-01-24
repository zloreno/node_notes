const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('HomePage');
		res.end();
	}
	if (req.url === '/api/courses') {
		res.write('Courses');
		res.end;
	}
});

server.listen(3000);

console.log('Listening on port 3000');
