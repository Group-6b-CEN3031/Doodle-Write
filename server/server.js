const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    stripe = require('stripe')(require('./config').stripe.secret);

const app = express();
const port = process.env.PORT || 5000;

// connect express middleware with additional options & body parsing middleware 
app.use(bodyParser.json());

// connect to database
mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// connect to stripe
(async () => {
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
        success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
        cancel_url: 'https://example.com/cancel',
    });
})();

// enable request logging for development debugging
app.use(morgan("dev"));

// add a router
app.use('/shop/data', require('./routes/shop.router.js'));

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Server now running on port ${port}!`));