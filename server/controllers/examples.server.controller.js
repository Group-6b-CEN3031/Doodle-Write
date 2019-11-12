const Item = require("../models/examples.server.model.js");

exports.list = function (req, res) {
    Item.find ({}, function (err, items) {
      if (err) {
        console.log (err);
        res.status (404).send (err);
      }
      else {
        res.json (items);
      }
    })
  };