import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        try {
            await axios.post("/api/contact", form);
            setStatus("success");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Get In Touch</h2>
                    <p>Have a project in mind? Let's talk!</p>
                </div>

                <div className="contact__grid">
                    {/* Info panel */}
                    <motion.div
                        className="contact__info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Let's build something great together</h3>
                        <p>
                            I'm currently open to internship opportunities, freelance projects,
                            and collaborative work. Feel free to reach out!
                        </p>

                        <div className="contact__info-items">
                            <div className="contact__info-item">
                                <span className="contact__info-icon">📧</span>
                                <a href="mailto:your.email@example.com" id="email-link">
                                    your.email@example.com
                                </a>
                            </div>
                            <div className="contact__info-item">
                                <span className="contact__info-icon">📍</span>
                                <span>India</span>
                            </div>
                            <div className="contact__info-item">
                                <span className="contact__info-icon">💼</span>
                                <a href="https://linkedin.com/in/anjisht" target="_blank" rel="noopener noreferrer" id="linkedin-contact">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        className="contact__form card"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        id="contact-form"
                    >
                        <div className="contact__form-group">
                            <label htmlFor="contact-name">Name</label>
                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                placeholder="Your name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact__form-group">
                            <label htmlFor="contact-email">Email</label>
                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact__form-group">
                            <label htmlFor="contact-message">Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows={5}
                                placeholder="Tell me about your project..."
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {status === "success" && (
                            <p className="contact__status contact__status--success">
                                ✅ Message sent successfully! I'll get back to you soon.
                            </p>
                        )}
                        {status === "error" && (
                            <p className="contact__status contact__status--error">
                                ❌ Something went wrong. Please try again or email directly.
                            </p>
                        )}

                        <button
                            id="contact-submit-btn"
                            type="submit"
                            className="btn btn-primary"
                            disabled={status === "loading"}
                        >
                            {status === "loading" ? "Sending..." : "Send Message →"}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
