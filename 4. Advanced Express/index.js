const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const courses = require('./routes/courses');
const homepage = require('./routes/homepage');
const logger = require('./middleware/Logger');
const config = require('config');

const app = express();

app.set('view engine', 'pug');

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
// For every api call that starts with the first argument, use the second
app.use('/api/courses', courses);
app.use('/', homepage);

console.log(`Application Name: ${config.get('name')}`);
console.log(`Application Host Server: ${config.get('mail.host')}`);
console.log(`Application Password: ${config.get('mail.pw')}`);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}...`));
