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
	// or
	// and
	const everyCourse = await Course.find();
	console.log(everyCourse);

	const specificCourses = await Course
		// Author starts with 'Mosh'
		// ^ -> indicates startes with
		.find({ author: /^Mosh/ });
		// Author ends with Hamedani
		// $ -> indicates the end of the string
		.find({author: /Hamedani$/})
		// if you add an 'i' right after the //, the string will be
		// CASE INSENSITIVE
		
		// Author Contains Monsh 
		// .* -> any character, any time
		.find({author: /.*Mosh.*/i})

	console.log(specificCourses);
}

getCourse();
