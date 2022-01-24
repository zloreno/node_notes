const express = require('express');
const app = express();

const Joi = require('joi');

// Adding a piece of middleware,
// which allows us to extract parse the JSON file
app.use(express.json());

//https://stackoverflow.com/questions/65750467/could-not-access-windows-environment-variable-in-node
const dotenv = require('dotenv');
dotenv.config();

const courses = [
	{ id: 1, name: 'course_1' },
	{ id: 2, name: 'course_2' },
	{ id: 3, name: 'course_3' },
];

app.get('/', (req, res) => res.send('Hello World'));

app.get('/api/courses', (req, res) => {
	res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find((c) => c.id == parseInt(req.params.id));
	if (!course)
		res.status(404).send('The course with the given ID was not found');
	else res.send(course);
});

app.get('/api/posts/:year/:month', (req, res) => {
	res.send(req.params); // {year: ':year', month: ':month'}
});

app.get('/api/comments/:year/:month', (req, res) => {
	res.send(req.query); // {sortBy: 'name'}
});

app.post('/api/courses', (req, res) => {
	const schema = Joi.object({
		name: Joi.string().min(3).required(),
	});

	const result = schema.validate(req.body);
	// Input Validation
	const name = req.body.name;
	if (!result.error) {
		const course = {
			id: courses.length + 1,
			name: name,
		};
		courses.push(course);
		res.send(course);
		console.log(courses);
		return;
	} else {
		res.status(400).send(result.error.details[0].message);
		return;
	}
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}...`));
