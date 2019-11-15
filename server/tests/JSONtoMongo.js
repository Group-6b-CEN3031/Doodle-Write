'use strict';
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Item = require('../models/shop.items.server.model'), 
    config = require('../config');
fs.readFile ('../../client/src/assets/items.json', 'utf8', function (err, data) {
    if (err) throw err;
    var itemData = JSON.parse (data);

    mongoose.connect (config.db.adminuri, {useNewUrlParser: true} );
    itemData.items.forEach (function(element) {
      var itemObj = new Item (element);
      itemObj.save (function (err) {
        if (err) throw err;
      })
    });
});