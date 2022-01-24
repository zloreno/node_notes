const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost/mosh')
	.then(() => console.log('Connected to MongoDB...'))
	.catch((err) => console.log('Error: ', err));

const courseSchema = new mongoose.Schema({
	name: { type: String, required: true },
	author: String,
	tags: [String],
	date: { type: Date, default: Date.now },
	price: Number,
	isPublished: Boolean,
});

const Course = mongoose.model('courses', courseSchema);

async function createCourse() {
	const course = new Course({
		//name: 'Angular Course',
		author: 'Mosh',
		tags: ['angular', 'js', 'frontend'],
		isPublished: true,
	});
	try {
		//method 1
		const result = await course.save();
		console.log(result);
		// method 2
		await course.validate();
	} catch (err) {
		console.log(err.message);
	}
}

createCourse();

// Joi in RESTful APIs to check that the data they send us is valid
// Mongoose to check that the data saved in the database is in the right shape
// -> we may receive the right data, but store it wrongly
