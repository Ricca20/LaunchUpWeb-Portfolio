const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: '*' })); // Allow all origins explicitly
app.use((req, res, next) => {
    console.log(`[REQUEST] ${req.method} ${req.url}`);
    next();
});
app.use(express.json());

// Database Connection
const connectDB = async () => {
    if (!process.env.MONGO_URI) {
        console.log('No MONGO_URI found in .env. Skipping database connection. (Email-only mode)');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB Connection Failed:', err.message);
    }
};

connectDB();

// Routes
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');

app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
