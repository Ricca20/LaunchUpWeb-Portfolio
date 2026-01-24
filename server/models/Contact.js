const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    company: { type: String },
    phone: { type: String },
    email: { type: String, required: true },
    service: { type: String },
    message: { type: String, required: true },
    read: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Contact', ContactSchema);
