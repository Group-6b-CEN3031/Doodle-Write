const router = require('express').Router(),
    uuid = require('uuid/v4'),
    stripe = require('stripe')(process.env.STRIPE_URI || require('../config').stripe.uri);

router.route('/').post( async (req, res) => {
    try{
        const customer = await stripe.customers.create({
            email: req.body.token.email,
            source: req.body.token.id
        });
        const idempotencyKey = uuid();
        await stripe.charges.create(
            {
                description: req.body.items,
                amount: req.body.totalCost,
                currency: 'USD',
                customer: customer.id,
                receipt_email: req.body.token.email,
                shipping: {
                    name: req.body.token.card.name,
                    address: {
                        line1: req.body.token.card.address_line1,
                        line2: req.body.token.card.address_line2,
                        city: req.body.token.card.address_city,
                        country: req.body.token.card.address_country,
                        postal_code: req.body.token.card.address_zip
                    }
                }
            },
            {
                idempotency_key: idempotencyKey
            }
        )
    }
    catch(error){
        console.error('Error: ' + error)
    }
})

module.exports = router;