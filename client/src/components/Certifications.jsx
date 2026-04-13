import { motion } from "framer-motion";
import deepLearningIcon from "../assets/certification icons/deeplearning.png";
import uMichiganIcon from "../assets/certification icons/umichigan.png";
import ibmIcon from "../assets/certification icons/ibm.png";
import redHatIcon from "../assets/certification icons/redhat.png";
import "./Certifications.css";

const certifications = [
    {
        title: "Neural Network and Deep Learning",
        issuer: "DeepLearning.AI",
        year: "2025",
        iconUrl: deepLearningIcon,
        link: "https://coursera.org/share/93d015423ff78017d5f449bf2717ca6f",
    },
    {
        title: "Python Data Structures",
        issuer: "University of Michigan",
        year: "2023",
        iconUrl: uMichiganIcon,
        link: "https://coursera.org/share/0a7193ba16b496f49b2c091df69a2814",
    },
    {
        title: "Tools for Data Science",
        issuer: "IBM",
        year: "2024",
        iconUrl: ibmIcon,
        link: "https://coursera.org/share/6ab02b5ad819d55b790d13dc652d4d16",
    },
    {
        title: "Red Hat System Administration I",
        issuer: "Red Hat Academy",
        year: "2025",
        iconUrl: redHatIcon,
        link: "https://www.credly.com/badges/bdcdda41-65ec-4df6-bea6-1e57a6395761",
    },
];

export default function Certifications() {
    return (
        <section className="certifications section" id="certifications">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Certifications</h2>
                    <p>Credentials I've earned</p>
                </div>

                <div className="certifications__grid">
                    {certifications.map((cert, i) => (
                        <motion.a
                            key={cert.title}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            id={`cert-${i}`}
                            className="cert-card-modern"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 90 }}
                            whileHover={{ y: -6 }}
                        >
                            <div className="cert-card-modern__glow"></div>
                            <div className="cert-card-modern__content">
                                <div className="cert-card-modern__header">
                                    <div className="cert-card-modern__icon-box">
                                        <img src={cert.iconUrl} alt={cert.issuer} className="cert-card-modern__icon-img" />
                                    </div>
                                    <span className="cert-card-modern__year badge">{cert.year}</span>
                                </div>
                                <h4 className="cert-card-modern__title">{cert.title}</h4>
                                <p className="cert-card-modern__issuer">{cert.issuer}</p>
                                <div className="cert-card-modern__footer">
                                    <span className="cert-card-modern__action">Verify Credential ↗</span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
