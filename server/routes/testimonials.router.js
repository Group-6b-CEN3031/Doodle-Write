const router = require('express').Router();
let Testimonial = require('../models/testimonials.model');

router.route('/').get((req, res) => {
	Testimonial.find()
		.then(data => /*res.status(200).json(data)*/console.log(data))
		.catch(err => console.log('Error: ' + err));
})

module.exports = router;