import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

// POST /api/contact
export const submitContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // Save to MongoDB
        const newContact = await Contact.create({ name, email, message });

        // Optional: send email notification via Nodemailer
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: `New Portfolio Message from ${name}`,
                html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br/>${message}</p>`,
            });
        }

        res.status(201).json({ success: true, data: newContact });
    } catch (err) {
        console.error("Contact form error:", err);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
};

// GET /api/contact (admin only — basic example)
export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ error: "Server error." });
    }
};
