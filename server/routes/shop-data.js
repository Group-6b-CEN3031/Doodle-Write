const router = require('express').Router();
let ShopData = require('../models/shop-data.model');

router.route('/').get((req, res) => {
    ShopData.find()
        .then(data => res.status(200).json(data))
        .catch(err => console.log('Error: ' + err));
})

module.exports = router;