const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost/mosh')
	.then(() => console.log('Connected to MongoDB...'))
	.catch((err) => console.log('Error: ', err));

const courseSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 255,
		match: /pattern/,
	},
	author: {
		type: String,
		required: true,
		// The only accepted values are the following:
		enum: ['Mosh', 'Jack', 'Dani'],
	},
	tags: [String],
	date: { type: Date, default: Date.now },
	// If price is required only as long as the course is published ->
	price: {
		type: Number,
		required: function () {
			// DO NOT USE ARROW FUNCTIONS HERE
			return this.isPublished;
		},
		min: 5,
		max: 50,
	},
	isPublished: Boolean,
});

const Course = mongoose.model('courses', courseSchema);

async function createCourse() {
	const course = new Course({
		name: 'Angular Course',
		author: 'Lollo',
		tags: ['angular', 'js', 'frontend'],
		isPublished: true,
		price: 500,
	});
	try {
		//method 1
		const result = await course.save();
		console.log(result);
		// method 2
		//await course.validate();
	} catch (err) {
		console.log(err.message);
	}
}

createCourse();
