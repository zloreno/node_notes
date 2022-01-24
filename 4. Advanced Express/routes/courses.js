const Joi = require('joi');
const express = require('express');
const router = express.Router();

const courses = [
	{ id: 1, name: 'course_1' },
	{ id: 2, name: 'course_2' },
	{ id: 3, name: 'course_3' },
];

function validateCourse(req, res) {
	const schema = Joi.object({
		name: Joi.string().min(3).required(),
	});
	return schema.validate(req.body);
}

// ------------------ GET ------------------

router.get('/', (req, res) => {
	res.send(courses);
});

router.get('/:id', (req, res) => {
	const course = courses.find((c) => c.id == parseInt(req.params.id));
	if (!course)
		return res.status(404).send('The course with the given ID was not found');
	else return res.send(course);
});

// ------------------ POST ------------------
router.post('/', (req, res) => {
	// Input Validation
	const { error } = validateCourse(req, res);
	if (error) return res.status(400).send(error.details[0].message);
	else {
		// Create new course
		const name = req.body.name;
		const course = {
			id: courses.length + 1,
			name: name,
		};
		courses.push(course);
		console.log(courses);
		return res.send(course);
	}
});

// ------------------ PUT ------------------
router.put('/:id', (req, res) => {
	// Lookup the course
	// If not existing -> 404
	const course = courses.find((c) => c.id == parseInt(req.params.id));
	if (!course)
		return res.status(404).send('The course with the given ID was not found');

	// Validate
	// If invalid -> 400 - Bad Request
	const { error } = validateCourse(req, res);
	if (error)
		return res.status(400).send(`Bad Request\n${error.details[0].message}`);

	// Update course
	course.name = req.body.name;

	// Return updated course
	console.log(courses);
	return res.send(course);
});

// ------------------ DELETE ------------------
router.delete('/:id', (req, res) => {
	// Lookup the course
	// If invalid -> 404
	const course = courses.find((c) => c.id == parseInt(req.params.id));
	if (!course)
		return res.status(404).send('The course with the given ID was not found');

	// Delete
	courses.splice(courses.indexOf(course), 1);

	// Return deleted course
	console.log(courses);
	return res.send(course);
});

module.exports = router;
