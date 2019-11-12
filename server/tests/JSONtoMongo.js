'use strict';

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Item = require('../models/examples.server.model.js'), 
    config = require('../config.js');

fs.readFile ('../../client/src/assets/items.json', 'utf8', function (err, data) {
    if (err) throw err;
    var itemData = JSON.parse (data);

    mongoose.connect (config.db.adminuri, {useNewUrlParser: true} );
    itemData.items.forEach (function(element) {
      var listObj = new Item (element);
      listObj.save (function (err) {
        if (err) throw err;
      })
    });
});