var mongoose = require('mongoose');
const Item = require("../models/shop.items.server.model.js");

exports.displayAll = async function (req, res) {
    await Item.find ({}, function (err, items) {
        if (err) {
            return res.status (400).json ({success: false, error: err });
        }
        else {
            return res.status (200).json ({success: true, data: items})
        }
    }).catch (err => console.log (err))
}