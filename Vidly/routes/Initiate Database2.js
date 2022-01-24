const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost/vidly')
	.then(() => console.log('Connected to MongoDB...'))
	.catch((err) => console.log('Error: ', err));

// Schema are the rules to which the data must oblige
const genereSchema = new mongoose.Schema({
	genere: { type: String, minlength: 3 },
});

// A model is a class that respects the rules defined in the schema
const Genere = mongoose.model('generes', genereSchema);

// Asynchronous method, it returns a promise
async function createGenere() {
	const genereInsert = new Genere({
		genere: 'vfbnk',
	});
	try {
		const result = await genereInsert.save();
		console.log('result: ', result);
	} catch (ex) {
		for (field in ex.errors) console.log(ex.errors[field].message);
	}
}

createGenere();
