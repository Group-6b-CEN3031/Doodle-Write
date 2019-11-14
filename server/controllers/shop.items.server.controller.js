var mongoose = require('mongoose');
const Item = require("../models/shop.items.server.model.js");

exports.displayAll = function (req, res) {
    Item.find ({}, function (err, items) {
        if (err) {
            console.log (err);
            res.status (400).send (err);
        }
        else {
            res.json (items);
        }
    })
};