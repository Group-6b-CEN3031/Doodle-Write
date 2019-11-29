const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

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

// enable request logging for development debugging
app.use(morgan("dev"));

// add a router
app.use('/shop/data', require('./routes/shop.router'));
app.use('/shop/checkout', require('./routes/checkout.router'));
app.use('/images', require('./routes/images.router'));
app.use('/testimonials', require('./routes/testimonials.router'));
app.use('/mail', require('./routes/mail.router'));

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Server now running on port ${port}!`));