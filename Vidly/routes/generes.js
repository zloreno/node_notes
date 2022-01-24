// Work with mongoDB in every request

const Joi = require('joi');
const express = require('express');
// connect to mongoDB in index.js
const mongoose = require('mongoose');
const router = express.Router();

function validateGenere(req) {
	const schema = Joi.object({
		genere: Joi.string().required(),
	});
	return schema.validate(req.body);
}

var genereSchema = new mongoose.Schema({
	genere: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 50,
		lowercase: true,
	},
});

const Genere = mongoose.model('generes', genereSchema);

// ------------------ GET ------------------
router.get('/', async (req, res) => {
	const generes = await Genere.find(); //.sort('genere');
	res.send(generes);
});

router.get('/:id', async (req, res) => {
	const genere = await Genere.findById(req.params.id);

	if (!genere) return res.status(404).send('The genere is not found');

	res.send(genere);
});
// ------------------ POST ------------------
router.post('/', async (req, res) => {
	// Validation of the genere
	// If invalid
	// -> 400 Bad Request
	const { error } = validateGenere(req);
	if (error) return res.status(400).send(error.details[0].message);

	// Add to generes
	// Extract genere name
	// Derive genere ID
	let genere = new Genere({
		genere: req.body.genere,
	});

	genere = await generes.save();
	// Return new genere
	return res.send(genere);
});

// ------------------ PUT ------------------
router.put('/:id', async (req, res) => {
	// Validate new genere
	// If not -> 400 Bad Request
	const { error } = validateGenere(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const genere = await Genere.findByIdAndDelete(
		req.params.id,
		{ name: req.body.name },
		{ new: true }
	);

	// Check that is valid id and that genere is new
	// If not -> 400 Bad Request
	if (!genere) res.status(404).send('Select a valid ID');

	return res.send(genere);
});

// ------------------ DELETE ------------------
router.delete('/:id', async (req, res) => {
	const genere = await Genere.findByIdAndDelete(req.params.id);
	// Check that is valid id and that genere is new
	// If not -> 400 Bad Request
	if (!genere) return res.status(404).send('Select a valid ID');

	// Remove and return
	return res.send(genere);
});

module.exports = router;
