import { motion } from "framer-motion";
import "./Certifications.css";

const certifications = [
    {
        title: "React - The Complete Guide",
        issuer: "Udemy / Coursera",
        year: "2024",
        icon: "⚛️",
        link: "#",
    },
    {
        title: "Node.js & Express Bootcamp",
        issuer: "Udemy",
        year: "2024",
        icon: "🟢",
        link: "#",
    },
    {
        title: "MongoDB for Developers",
        issuer: "MongoDB University",
        year: "2023",
        icon: "🍃",
        link: "#",
    },
    {
        title: "The Complete Python Bootcamp",
        issuer: "NPTEL / Udemy",
        year: "2023",
        icon: "🐍",
        link: "#",
    },
];

const achievements = [
    { title: "Smart India Hackathon — Participant", year: "2024", icon: "🏆" },
    { title: "College Coding Fest — 2nd Place", year: "2023", icon: "🥈" },
];

export default function Certifications() {
    return (
        <section className="certifications section" id="certifications">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Certifications & Achievements</h2>
                    <p>Credentials and milestones I've earned</p>
                </div>

                <h3 className="certifications__sub-heading" data-aos="fade-up">
                    📜 Certifications
                </h3>
                <div className="certifications__grid">
                    {certifications.map((cert, i) => (
                        <motion.a
                            key={cert.title}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            id={`cert-${i}`}
                            className="cert-card card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="cert-card__icon">{cert.icon}</span>
                            <div>
                                <h4 className="cert-card__title">{cert.title}</h4>
                                <p className="cert-card__issuer">{cert.issuer}</p>
                                <span className="cert-card__year badge">{cert.year}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <h3 className="certifications__sub-heading" data-aos="fade-up" style={{ marginTop: "3rem" }}>
                    🏅 Achievements
                </h3>
                <div className="achievements__list">
                    {achievements.map((ach, i) => (
                        <motion.div
                            key={ach.title}
                            className="achievement-item card"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <span className="achievement-item__icon">{ach.icon}</span>
                            <div>
                                <p className="achievement-item__title">{ach.title}</p>
                                <span className="achievement-item__year">{ach.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
