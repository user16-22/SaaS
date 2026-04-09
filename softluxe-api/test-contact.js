const axios = require('axios');

async function testContact() {
    try {
        const response = await axios.post('http://127.0.0.1:5000/api/contact', {
            name: 'Test User',
            email: 'test@example.com',
            subject: 'Test Subject',
            message: 'This is a test message'
        });
        console.log('SUCCESS:', response.data);
    } catch (error) {
        console.log('ERROR:', error.response ? error.response.data : error.message);
        console.log('Status:', error.response ? error.response.status : 'N/A');
    }
}

testContact();
