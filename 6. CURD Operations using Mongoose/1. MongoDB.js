const mongoose = require('mongoose');

// Returns a promise
mongoose
	.connect('mongodb://localhost/mosh')
	.then(() => console.log('Connected to MongoDB...'))
	.catch((err) => console.log('Error: ', err));

// As schema types, we have:
// 1. String
// 2. Number
// 3. Date
// 4. Buffer => used for storing binary data
// 5. Boolean
// 6. ObjectID

const courseSchema = new mongoose.Schema({
	name: String,
	author: String,
	tags: [String],
	// Date.now will be set as date if nothing is provided
	date: { type: Date, default: Date.now },
	isPublished: Boolean,
});
