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
		// Will automatically save the values in lowercase
		lowercase: true,
		// // Will automatically uppercase the string
		uppercase: true,
		// Remove paddings around the strings
		trim: true,
	},
	author: {
		type: String,
		required: true,
		enum: ['Mosh', 'Jack', 'Dani', 'dani'],
		lowercase: true,
	},

	tags: {
		type: Array,
		validate: {
			validator: async function (v) {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						console.log('test');
						const result = v.length > 0 && v;
						resolve(result);
					}, 3000);
				});
			},
			message: 'A course should have at least 1 tag',
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
		// When we extract the data from the db, it will be rounded
		get: (v) => Math.round(v),
		// When we set the data, it is rounded
		set: (v) => Math.round(v),
	},
	isPublished: Boolean,
});

const Course = mongoose.model('courses', courseSchema);

async function createCourse() {
	const course = new Course({
		name: 'TEST_TEST',
		author: 'Dani',
		tags: ['test'],
		isPublished: true,
		price: 23.9,
	});
	try {
		const result = await course.save();
		console.log('result: ', result);
	} catch (ex) {
		for (field in ex.errors) console.log(ex.errors[field].message);
	}
}

createCourse();
