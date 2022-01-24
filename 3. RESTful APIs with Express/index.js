const express = require('express');
const app = express();

// HTTP methods defined previously
//app.get();
//app.post();
//app.put();
//app.delete();

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/api/courses', (req, res) => res.send([1, 2, 3, 4, 5]));

app.listen(3000, () => console.log('Listening on Port 3000'));
