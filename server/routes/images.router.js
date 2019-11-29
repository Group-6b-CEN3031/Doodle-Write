const router = require('express').Router(),
    Image = require('../models/images.model');

router.route('/').get((req, res) => {
	Image.find()
		.then(data => res.status(200).json(data))
		.catch(err => console.log('Error: ' + err));
})

module.exports = router;