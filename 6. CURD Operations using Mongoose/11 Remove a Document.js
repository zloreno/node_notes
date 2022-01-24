const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost/mosh')
	.then(() => console.log('Connected to MongoDB...'))
	.catch((err) => console.log('Error: ', err));

const courseSchema = new mongoose.Schema({
	name: String,
	author: String,
	tags: [String],
	date: { type: Date, default: Date.now },
	price: Number,
	isPublished: Boolean,
});

const Course = mongoose.model('courses', courseSchema);

async function removeCourse(id) {
	// If the filter is broad enough to include multiple objects,
	// deleteOne will delete the first one it will find
	const deleted = await Course.deleteOne({ _id: id });
	console.log(deleted); //{deletedCount: 1}
}

removeCourse('61dda3ef553918813a81743d');

async function removeCourses(id) {
	const deleted = await Course.deleteMany({ isPublished: false });
	console.log(deleted); //{deletedCount: NumberOfObjectsDeleted}
}

async function removeCoursesAndStoreIt(id) {
	const deleted = await Course.findByIdAndDelete(id);
	console.log(deleted); //{deltedObject}
}

removeCoursesAndStoreIt('61dda5090059fed4d2b8b359');
