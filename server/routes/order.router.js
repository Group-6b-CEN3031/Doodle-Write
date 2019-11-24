const router = require('express').Router(),
    stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || require('../config').stripe.secret);

router.route('/').post( async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            name: 'T-shirt',
            description: 'Comfortable cotton t-shirt',
            images: ['https://example.com/t-shirt.png'],
            amount: 500,
            currency: 'usd',
            quantity: 1,
        }],
        success_url: 'https://www.google.com',
        cancel_url: 'https://www.yahoo.com',
    });
    res.send(session)
})

module.exports = router;