const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/', contactController.submitContactForm);

// Dashboard routes
router.get('/', contactController.getAllMessages);
router.post('/reply', contactController.replyToMessage);
router.delete('/:id', contactController.deleteMessage);

module.exports = router;
