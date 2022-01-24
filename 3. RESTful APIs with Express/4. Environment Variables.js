const express = require('express');
const app = express();
//https://stackoverflow.com/questions/65750467/could-not-access-windows-environment-variable-in-node
const dotenv = require('dotenv');
dotenv.config();

// HTTP methods defined previously
//app.get();
//app.post();
//app.put();
//app.delete();

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/api/courses', (req, res) => res.send([1, 2, 3, 4, 5]));

// In real life, ports are dynamially assigned
// Its value is defined outside the application
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}...`));
