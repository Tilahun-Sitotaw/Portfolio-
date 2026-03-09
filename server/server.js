import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Configure CORS for security
app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    methods: ['POST', 'GET'],
    credentials: true
}));
app.use(express.json());

const PORT = process.env.PORT || 5000;

// This is a simple endpoint to handle contact form submissions
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    const isSecure = (process.env.SMTP_PORT === '465');

    // Create a robust transporter using Brevo (Sendinblue) or Gmail
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '465'),
        secure: isSecure,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        connectionTimeout: 30000,
    });

    const mailOptions = {
        from: email,
        to: 'tilahunsitotaw87@gmail.com',
        subject: `New Portfolio Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
