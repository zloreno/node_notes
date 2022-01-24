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

const Course = mongoose.model('courses', courseSchema);

async function getCourse() {
	// In real life these parameters would be passed, and not hardcoded
	const pageNumber = 2;
	const pageSize = 10;
	//api/courses?pageNumber=10&pageSize=30

	const everyCourse = await Course.find();
	console.log(everyCourse);

	const specificCourses = await Course.find({ author: /^Mosh/ })
		.skip((pageNumber - 1) * pageSize)
		.limit(pageSize);

	console.log(specificCourses);
}

getCourse();
