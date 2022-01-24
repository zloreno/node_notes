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
async function getCourse() {
	//Course.find -> gets list of documents
	//Course.findByID -> ._."
	//Course.findOne -> returns single document
	const everyCourse = await Course.find();
	console.log(everyCourse);
	const specificCourses = await Course.find({
		author: 'Mosh',
		isPublished: true,
	})
		//.limit(10)
		//when sorting, 1 = ascending, -1 = descending
		.sort({ name: 1 })
        // OR
        .sort('name')
        //OR (price in descending order)
        .sort('-price')
		// which attributes you want to show
        // either as object as shown
		.select({ name: 1, tags: 1 });
        // or
        .select('name tags')

	console.log(specificCourses);
}

getCourse();
