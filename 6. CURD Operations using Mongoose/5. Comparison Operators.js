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
	// eq -> equal
	// ne -> not equal
	// gt -> greater than
	// gte -> greater or equal than
	// lt -> lower than
	// lte
	// in
	// nin -> not in
	const everyCourse = await Course.find();
	console.log(everyCourse);

	const specificCourses = await Course
		// price greater than 10 and lower than 20
		//.find({ price: { $gt: 10, $lte: 20 } });
		// price equal to 10, 15 , OR 20
		.find({ price: { $in: [10, 15, 20] } });

	console.log(specificCourses);
}

getCourse();
