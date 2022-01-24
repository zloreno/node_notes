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

// Query First
// 1. Retreive -> findById()
// 2. Modify its properties -> object.property or object.set
// 3. Store it back -> save

async function queryFirst(id) {
	const course = await Course.findById(id);
	if (!course) return;
	// Option one
	course.isPublished = true;
	// Option two
	course.set({
		author: 'Another Author',
	});

	const savedCourse = await course.save();
	console.log(savedCourse);
}

//queryFirst('61dda5090059fed4d2b8b359');

// Update First
// Update directly
// Optionally: get the updated document

// https://docs.mongodb.com/manual/reference/operator/update/
async function documentFirst(id) {
	const result = await Course.updateOne(
		{ _id: id },
		{
			$set: {
				author: 'Mosh',
				isPublished: false,
			},
		}
	);
	console.log(result);
}

//documentFirst('61dda5090059fed4d2b8b359');

async function updateObjectAndSaveItBeforeUpdate(id) {
	const course = await Course.findByIdAndUpdate(id, {
		$set: { author: 'Lollo', isPublished: false },
	});
	console.log(course);
}

//updateObjectAndSaveItBefore('61dda5090059fed4d2b8b359');

async function updateObjectAndSaveItAfterUpdate(id) {
	const course = await Course.findByIdAndUpdate(
		id,
		{
			$set: { author: 'Dani', isPublished: false },
		},
		{ new: true }
	);
	console.log(course);
}

updateObjectAndSaveItAfterUpdate('61dda5090059fed4d2b8b359');
