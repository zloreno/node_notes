// SAFE
const Joi = require('joi');
const express = require('express');
const router = express.Router();

function validateGenere(req, res) {
	const schema = Joi.object({
		genere: Joi.string().required(),
	});
	return schema.validate(req.body);
}

const generes = [
	{ id: 1, genere: 'horror' },
	{ id: 2, genere: 'thriller' },
	{ id: 3, genere: 'fantasy' },
	{ id: 4, genere: 'action' },
	{ id: 5, genere: 'romance' },
	{ id: 6, genere: 'comedy' },
	{ id: 7, genere: 'historical' },
	{ id: 8, genere: 'documentary' },
];

// ------------------ GET ------------------
router.get('/', (req, res) => res.send(generes));

// ------------------ POST ------------------
router.post('/', (req, res) => {
	// Check if existing
	const existinGenere = generes.find(
		(c) => c.genere == String(req.body.genere)
	);
	console.log(existinGenere);

	// If existing
	// -> 400 Bad Request
	if (existinGenere) {
		return res.status(400).send('Bad Request - Genere is already existing');
	}
	// Validation of the genere
	// If invalid
	// -> 400 Bad Request
	const { error } = validateGenere(req, res);
	if (error) return res.status(400).send(error.details[0].message);

	// Add to generes
	// Extract genere name
	// Derive genere ID
	const genere = {
		id: generes.length + 1,
		genere: req.body.genere,
	};

	generes.push(genere);
	console.log(genere);
	// Return new genere
	return res.send(genere);
});

// ------------------ PUT ------------------
router.put('/:id', (req, res) => {
	// Check that is valid id and that genere is new
	// If not -> 400 Bad Request
	const genere = generes.find((c) => c.id == parseInt(req.params.id));
	const genereName = generes.find((c) => c.genere == String(req.body.genere));
	if (!genere) res.status(404).send('Select a valid ID');
	if (genereName)
		res.status(400).send('Bad Request, the given genere is already existing');
	if (!genere || genereName) return;

	// Validate new genere
	// If not -> 400 Bad Request
	const { error } = validateGenere(req, res);
	if (error) return res.status(400).send(error.details[0].message);

	// Update value
	genere.genere = req.body.genere;
	console.log(genere);
	return res.send(genere);
});

// ------------------ DELETE ------------------
router.delete('/:id', (req, res) => {
	// Check that is valid id and that genere is new
	// If not -> 400 Bad Request
	const genere = generes.find((c) => c.id == parseInt(req.params.id));
	if (!genere) return res.status(404).send('Select a valid ID');

	// Remove and return
	generes.splice(generes.indexOf(genere), 1);
	console.log(genere);
	return res.send(genere);
});

module.exports = router;
