const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost/mosh')
	.then(() => console.log('Connected to MongoDB...'))
	.catch((err) => console.log('Error: ', err));

// Schema are the rules to which the data must oblige
const courseSchema = new mongoose.Schema({
	name: String,
	author: String,
	tags: [String],
	date: { type: Date, default: Date.now },
	isPublished: Boolean,
});

// Pascal naming convention -> Class
// A model is a class that respects the rules defined in the schema
const Course = mongoose.model('courses', courseSchema);

// Asynchronous method, it returns a promise
async function createCourse() {
	const course = new Course({
		name: 'Angular Course',
		author: 'Mosh',
		tags: ['angular', 'js', 'frontend'],
		isPublished: true,
	});
	const result = await course.save();
	console.log(result);
}

createCourse();
