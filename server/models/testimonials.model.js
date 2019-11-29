const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testimonialSchema = new Schema ({
    content: { type: String, required: true },
    name: { type: String, required: true },
    credentials: { type: String, required: true }
})

const Testimonial = mongoose.model('testimonials', testimonialSchema);

module.exports = Testimonial;