const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], required: true },
    imageUrl: { type: String, required: true },
    liveLink: { type: String },
    repoLink: { type: String },
    featured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
