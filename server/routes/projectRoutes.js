const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a project (Protected route placeholder - simpler for now)
router.post('/', async (req, res) => {
    const project = new Project({
        title: req.body.title,
        description: req.body.description,
        technologies: req.body.technologies,
        imageUrl: req.body.imageUrl,
        liveLink: req.body.liveLink,
        repoLink: req.body.repoLink,
        featured: req.body.featured
    });

    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
