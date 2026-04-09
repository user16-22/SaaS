const mongoose = require('mongoose');
const Contact = require('./models/Contact');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/softluxe')
    .then(async () => {
        console.log('MongoDB Connected');

        try {
            const testContact = new Contact({
                name: 'Test User',
                email: 'test@example.com',
                subject: 'Test Subject',
                message: 'Test message'
            });

            const saved = await testContact.save();
            console.log('SUCCESS! Contact saved:', saved._id);
            process.exit(0);
        } catch (error) {
            console.log('ERROR saving contact:', error.message);
            console.log('Full error:', error);
            process.exit(1);
        }
    })
    .catch(err => {
        console.log('MongoDB connection error:', err);
        process.exit(1);
    });
