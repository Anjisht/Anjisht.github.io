import { motion } from "framer-motion";
import "./Timeline.css";

const timelineItems = [
    {
        type: "education",
        icon: "🎓",
        title: "B.Tech — Computer Science & Engineering",
        org: "JKLU, Jaipur",
        period: "2022 – Present",
        desc: "Pursuing a full-stack engineering curriculum with focus on web development, algorithms, and machine learning.",
    },
    {
        type: "education",
        icon: "🏫",
        title: "Higher Secondary (12th)",
        org: "Your School Name",
        period: "2020 – 2022",
        desc: "PCM stream with distinction. Achieved strong foundation in mathematics and physics.",
    },
    {
        type: "experience",
        icon: "💻",
        title: "Full-Stack Developer Intern",
        org: "Company Name (if applicable)",
        period: "Jun – Aug 2024",
        desc: "Built RESTful APIs with Node.js and contributor-facing UI features in React. Gained hands-on experience with production deployments.",
    },
];

export default function Timeline() {
    return (
        <section className="timeline section" id="timeline">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Education & Experience</h2>
                    <p>My journey so far</p>
                </div>

                <div className="timeline__track">
                    {timelineItems.map((item, i) => (
                        <motion.div
                            key={i}
                            className={`timeline__item ${i % 2 === 0 ? "timeline__item--left" : "timeline__item--right"}`}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                        >
                            <div className="timeline__dot">
                                <span>{item.icon}</span>
                            </div>
                            <div className="timeline__content card">
                                <div className="timeline__type badge">{item.type}</div>
                                <h3 className="timeline__title">{item.title}</h3>
                                <p className="timeline__org">{item.org}</p>
                                <p className="timeline__period">{item.period}</p>
                                <p className="timeline__desc">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                    <div className="timeline__line" />
                </div>
            </div>
        </section>
    );
}
