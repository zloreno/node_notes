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
	},
	isPublished: Boolean,
});

const Course = mongoose.model('courses', courseSchema);

async function createCourse() {
	const course = new Course({
		name: 'Angular Course',
		author: 'Lollo',
		tags: [],
		isPublished: true,
		price: 50,
	});
	try {
		const result = await course.save();
		console.log('result: ', result);
	} catch (ex) {
		for (field in ex.errors) console.log(ex.errors[field].message);
	}
}

createCourse();
