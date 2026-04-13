import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import "./Contact.css";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const API_URL = import.meta.env.VITE_API_URL || "";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        try {
            await axios.post(`${API_URL}/api/contact`, form);
            setStatus("success");
            setForm({ name: "", email: "", message: "" });
            setTimeout(() => {
                setStatus(null);
            }, 5000);
        } catch (err) {
            console.error(err);
            setStatus("error");
            setTimeout(() => {
                setStatus(null);
            }, 5000);
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
                        className="contact__info contact-card-modern"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="contact-card-modern__glow"></div>
                        <div className="contact-card-modern__content-wrap">
                            <h3>Let's build something great together</h3>

                            <div className="contact__info-list">
                                {/* Github */}
                                <div className="contact-list-item">
                                    <div className="contact-list-header">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-list-icon">
                                            <line x1="6" x2="6" y1="3" y2="15"></line>
                                            <circle cx="18" cy="6" r="3"></circle>
                                            <circle cx="6" cy="18" r="3"></circle>
                                            <path d="M18 9a9 9 0 0 1-9 9"></path>
                                        </svg>
                                        <span className="contact-list-label">GITHUB</span>
                                    </div>
                                    <a href="https://github.com/Anjisht" target="_blank" rel="noopener noreferrer" className="contact-list-value">
                                        github.com/Anjisht
                                    </a>
                                </div>

                                {/* LinkedIn */}
                                <div className="contact-list-item">
                                    <div className="contact-list-header">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-list-icon">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                            <rect width="4" height="12" x="2" y="9"></rect>
                                            <circle cx="4" cy="4" r="2"></circle>
                                        </svg>
                                        <span className="contact-list-label">LINKEDIN</span>
                                    </div>
                                    <a href="https://www.linkedin.com/in/anjisht-amritanshu-2b46b8285/" target="_blank" rel="noopener noreferrer" className="contact-list-value">
                                        linkedin.com/in/anjisht
                                    </a>
                                </div>

                                {/* Email */}
                                <div className="contact-list-item">
                                    <div className="contact-list-header">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-list-icon">
                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </svg>
                                        <span className="contact-list-label">EMAIL</span>
                                    </div>
                                    <a href="mailto:anjishtamritanshu@jklu.edu.in" className="contact-list-value">
                                        anjishtamritanshu@jklu.edu.in
                                    </a>
                                </div>

                                {/* Location */}
                                <div className="contact-list-item">
                                    <div className="contact-list-header">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-list-icon">
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span className="contact-list-label">LOCATION</span>
                                    </div>
                                    <span className="contact-list-value">
                                        Jaipur, Rajasthan, India
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        className="contact__form contact-card-modern"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        id="contact-form"
                    >
                        <div className="contact-card-modern__glow"></div>
                        <div className="contact-card-modern__content-wrap">
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

                            <AnimatePresence>
                                {status === "success" && (
                                    <motion.p
                                        className="contact__status contact__status--success"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        ✅ Message sent successfully! I'll get back to you soon.
                                    </motion.p>
                                )}
                                {status === "error" && (
                                    <motion.p
                                        className="contact__status contact__status--error"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        ❌ Something went wrong. Please try again or email directly.
                                    </motion.p>
                                )}
                            </AnimatePresence>

                            <button
                                id="contact-submit-btn"
                                type="submit"
                                className="btn btn-primary"
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? "Sending..." : "Send Message →"}
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
