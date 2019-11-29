const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema ({
    url: { type: String, required: true },
})

const Image = mongoose.model('images', imageSchema);

module.exports = Image;