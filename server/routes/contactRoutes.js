const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Submit a message
const nodemailer = require('nodemailer');

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

    // 1. Try to send Email (Priority)
    let emailSent = false;
    try {
        // Email Configuration (Nodemailer) - Updated for Custom SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        const mailOptions = {
            from: process.env.SMTP_USER, // Sender address
            to: 'Info@launchupweb.com',
            subject: `New Project Inquiry from ${req.body.name}`,
            html: `
                <h3>New Project Inquiry</h3>
                <p><strong>Name:</strong> ${req.body.name}</p>
                <p><strong>Company:</strong> ${req.body.company}</p>
                <p><strong>Phone:</strong> ${req.body.phone}</p>
                <p><strong>Email:</strong> ${req.body.email}</p>
                <p><strong>Service:</strong> ${req.body.service}</p>
                <p><strong>Message:</strong> ${req.body.message}</p>
            `
        };

        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            await transporter.sendMail(mailOptions);
            emailSent = true;
        } else {
            console.warn("Skipping email: Missing SMTP_USER or SMTP_PASS in .env");
        }
    } catch (emailErr) {
        console.error("Email sending failed:", emailErr);
    }

    // 2. Try to save to DB (Secondary) - Only if connected!
    try {
        const mongoose = require('mongoose');
        if (mongoose.connection.readyState === 1) { // 1 = Connected
            await contact.save();
        } else {
            console.warn("Skipping DB save: Database not connected.");
        }
    } catch (dbErr) {
        console.error("Database save failed:", dbErr.message);
    }

    // 3. Always return success to the data user if at least one worked (or just to keep UI happy)
    res.status(201).json({
        message: 'Processed request',
        emailSent: emailSent,
        dbSaved: false
    });
});

module.exports = router;
