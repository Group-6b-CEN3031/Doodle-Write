const path = require("path"),
    express = require("express"),
    mongoose = require("mongoose"),
    morgan = require("morgan"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    shopRouter = require("./routes/shop.server.routes");

module.exports.init = () => {
    /* 
        connect to database
        - reference README for db uri
    */
    mongoose.connect(process.env.DB_URI || require("./config").db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.set("useCreateIndex", true);
    mongoose.set("useFindAndModify", false);

    // initialize app
    const app = express();
    const apiPort = 3001;

    // enable request logging for development debugging
    app.use(morgan("dev"));

    // body parsing middleware
    app.use(bodyParser.json());

    // connect express middleware with additional options
    app.use(cors());

    // add a router
    app.use(shopRouter);
    app.listen (apiPort, () => console.log ('api listening on port ' + apiPort))

    if (process.env.NODE_ENV === "production") {
        // Serve any static files
        app.use(express.static(path.join(__dirname, "../client/build")));

        // Handle React routing, return all requests to React app
        app.get("*", function(req, res) {
            res.sendFile(path.join(__dirname, "../client/build", "index.html"));
        });
    }

    return app
}

