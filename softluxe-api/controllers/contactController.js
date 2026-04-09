const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

exports.submitContactForm = async (req, res) => {
    console.log('--- Incoming Contact Submission ---');
    console.log('Body:', req.body);
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        console.log('Validation Failed: Missing required fields');
        return res.status(400).json({ message: 'Please fill in all required fields' });
    }

    try {
        console.log('Saving to MongoDB...');
        // 1. Save to Database
        const newContact = new Contact({
            name,
            email,
            subject,
            message
        });
        await newContact.save();
        console.log('Message Saved to DB Successfully:', newContact._id);

        // 2. Try to send email but don't fail if it fails
        const isEmailConfigured = process.env.EMAIL_USER &&
            process.env.EMAIL_USER !== 'your-email@gmail.com' &&
            process.env.EMAIL_PASS &&
            process.env.EMAIL_PASS !== 'your-email-password';

        if (isEmailConfigured) {
            try {
                console.log('Attempting to send email notification...');
                const transporter = nodemailer.createTransport({
                    service: process.env.EMAIL_SERVICE || 'gmail',
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS
                    }
                });

                const mailOptions = {
                    from: email,
                    to: process.env.EMAIL_USER,
                    subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
                    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
                };

                await transporter.sendMail(mailOptions);
                console.log('Notification email sent successfully');
            } catch (emailError) {
                console.error('Email sending failed, but data was saved:', emailError);
            }
        } else {
            console.log('Email notification skipped: No valid credentials');
        }

        res.status(200).json({
            message: 'Message saved successfully! (Note: Email notifications are disabled until you configure .env)',
            id: newContact._id
        });

    } catch (error) {
        console.error('Submit contact DB error:', error);
        res.status(500).json({ message: 'Error saving your message', error: error.message || error.toString() });
    }
};

// Dashboard: Get all messages
exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching messages', error: error.toString() });
    }
};

// Dashboard: Reply to a message
exports.replyToMessage = async (req, res) => {
    const { id, replyContent } = req.body;

    if (!id || !replyContent) {
        return res.status(400).json({ message: 'Message ID and reply content are required' });
    }

    try {
        const contact = await Contact.findById(id);
        if (!contact) {
            return res.status(404).json({ message: 'Message not found' });
        }

        // Check if email is configured
        const isEmailConfigured = process.env.EMAIL_USER &&
            process.env.EMAIL_USER !== 'your-email@gmail.com' &&
            process.env.EMAIL_PASS &&
            process.env.EMAIL_PASS !== 'your-email-password';

        let emailSent = false;

        if (isEmailConfigured) {
            try {
                // Send email reply
                const transporter = nodemailer.createTransport({
                    service: process.env.EMAIL_SERVICE || 'gmail',
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS
                    }
                });

                const mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: contact.email,
                    subject: `Re: ${contact.subject || 'Your inquiry'}`,
                    text: replyContent
                };

                await transporter.sendMail(mailOptions);
                emailSent = true;
                console.log('Reply email sent successfully to:', contact.email);
            } catch (emailError) {
                console.error('Email sending failed, but reply will be saved:', emailError.message);
            }
        } else {
            console.log('Email not configured - reply saved to database only');
        }

        // Update DB (always save the reply, even if email fails)
        contact.status = 'replied';
        contact.reply = replyContent;
        contact.repliedAt = Date.now();
        await contact.save();

        const message = emailSent
            ? 'Reply sent via email and saved successfully'
            : 'Reply saved to database (Email not sent - configure .env for email notifications)';

        res.status(200).json({ message, emailSent });
    } catch (error) {
        console.error('Reply error:', error);
        res.status(500).json({ message: 'Error processing reply', error: error.message });
    }
};

// Dashboard: Delete a message
exports.deleteMessage = async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting message', error: error.toString() });
    }
};
