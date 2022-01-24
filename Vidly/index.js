const express = require('express');
const mongoose = require('mongoose');
const generes = require('./routes/generes');

const app = express();

mongoose
	.connect('mongodb://localhost/vidly')
	.then(() => console.log('Connecting to the database'))
	.catch((err) => console.log(`Error: ${err} `));

app.use(express.json());
app.use('/api/generes', generes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}...`));
