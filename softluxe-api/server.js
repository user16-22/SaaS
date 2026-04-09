const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
    console.log(`\n=== Incoming Request ===`);
    console.log(`${req.method} ${req.url}`);
    console.log('Body:', req.body);
    console.log('========================\n');
    next();
});

// Routes Configuration
app.use('/api/contact', require('./routes/contact'));

app.get('/', (req, res) => {
    res.send('Softluxe API is running...');
});

// Global Error Handler (must be after routes)
app.use((err, req, res, next) => {
    console.error('=== GLOBAL ERROR HANDLER ===');
    console.error('Error:', err);
    console.error('Stack:', err.stack);
    res.status(500).json({
        message: 'Internal Server Error',
        error: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});

// Database Connection - Start server only after DB connects
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/softluxe')
    .then(() => {
        console.log('MongoDB Connected');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });
