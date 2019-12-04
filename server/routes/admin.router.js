const router = require('express').Router(),
    Item = require('../models/shop.model'),
    Testimonial = require('../models/testimonials.model');

router.route('/pw').post((req, res) => {
    console.log(res.body.pw + ' received pw')
    res.send ((req.body.pw === (process.env.EMAIL_PW || require('../config').email.pw)) ? true : false).status(200)
})

router.route('/shop/create').post((req, res) => {
    Item.create({ image: req.body.image, 
                  name: req.body.name,
                  price: req.body.price,
                  description: req.body.description }, function (err) {
                      if (err) throw err;
                  })
})

router.route('/shop/updatebyname').post((req, res) => {
    Item.updateOne ({ name: req.body.name },
        { image: req.body.image,
          price: req.body.price,
          description: req.body.description },
        function (err) {
        if (err) throw err;
    })
    .then(res.status(200))
})

router.route('/shop/updatebyprice').post((req, res) => {
    Item.updateOne ({ price: req.body.price },
        { image: req.body.image,
          name: req.body.name,
          description: req.body.description },
        function (err) {
        if (err) throw err;
    })
    .then(res.status(200))
})

router.route('/shop/delete').post((req, res) => {
    Item.deleteOne({ name: req.body.name }, function (err) {
        if (err) throw err;
    })
    .then(data => res.status(200).json(data))
    .catch(err => console.log('Error: ' + err));
})

router.route('/testimonials/create').post((req, res) => {
    Testimonial.create({ content: req.body.content,
                         name: req.body.name,
                         credentials: req.body.credentials }, function (err) {
                             if (err) throw err;
                         })
})

router.route('/testimonials/updatebyname').post((req, res) => {
    Testimonial.updateOne ({ name: req.body.name },
        { content: req.body.content,
          credentials: req.body.credentials },
        function (err) {
        if (err) throw err;
    })
    .then(res.status(200))
})

router.route('/testimonials/updatebycredentials').post((req, res) => {
    Testimonial.updateOne ({ credentials: req.body.credentials },
        { content: req.body.content,
          name: req.body.name },
        function (err) {
        if (err) throw err;
    })
    .then(res.status(200))
})

router.route('/testimonials/delete').post((req, res) => {
    Testimonial.deleteOne({ name: req.body.name }, function (err) {
        if (err) throw err;
    })
    .then(res.status(200))
    .catch(err => console.log('Error: ' + err));
})

module.exports = router;