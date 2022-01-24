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

	const specificCourses = await Course.find()
		// find courses that are either authored by mosh OR published
		.or([{ author: 'Mosh' }, { isPublished: true }])
		// AND that costs more than 20
		.and({ price: { $gt: 20 } });

	console.log(specificCourses);
}

getCourse();
