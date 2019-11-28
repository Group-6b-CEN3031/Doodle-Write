const router = require('express').Router();
let Item = require('../models/shop.model');

router.route('/').get((req, res) => {
    Item.find()
        .then(data => res.status(200).json(data))
        .catch(err => console.log('Error: ' + err));
})

module.exports = router;