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
		//match: /pattern/,
	},
	author: {
		type: String,
		required: true,
		enum: ['Mosh', 'Jack', 'Dani'],
	},
	tags: {
		type: Array,
		validate: {
			validator: function (v) {
				return v && v.length > 0;
			},
			message: 'The course whould have at least one tag',
		},
	},
	date: { type: Date, default: Date.now },
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
		author: 'Mosh',
		tags: [],
		isPublished: true,
		price: 50,
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
