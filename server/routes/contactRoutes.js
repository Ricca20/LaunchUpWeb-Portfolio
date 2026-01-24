const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Submit a message
router.post('/', async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        company: req.body.company,
        phone: req.body.phone,
        email: req.body.email,
        service: req.body.service,
        message: req.body.message
    });

    try {
        const newContact = await contact.save();
        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
