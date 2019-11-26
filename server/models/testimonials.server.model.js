var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var testimonialSchema = new Schema ({
    content: { type: String, required: true },
    name: { type: String, required: true },
    credentials: { type: String, required: false }
});

testimonialSchema.pre('save', function(next) {
    next();
});

var Testimonial = mongoose.model('testimonials', testimonialSchema);
module.exports = Testimonial;