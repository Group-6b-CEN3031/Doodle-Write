const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shopDataSchema = new Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true }
})

const ShopData = mongoose.model('ShopData', shopDataSchema)

module.exports = ShopData;