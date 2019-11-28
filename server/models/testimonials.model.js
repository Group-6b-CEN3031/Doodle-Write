const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testimonialSchema = new Schema ({
    content: { type: String, required: true },
    name: { type: String, required: true },
    credential: { type: String, required: false }
})

const Testimonial = mongoose.model('testimonials', testimonialSchema);

module.exports = Testimonial;