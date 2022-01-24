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

// Instances of a model are the actual rows within the database
const course = new Course({
	name: 'NodeJS Course',
	author: 'Mosh',
	tags: ['node', 'js', 'backend'],
	isPublished: true,
});
