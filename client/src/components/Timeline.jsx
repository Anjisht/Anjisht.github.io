import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "./Timeline.css";

const timelineItems = [
    {
        type: "education",

        title: "B.Tech — Computer Science & Engineering",
        org: "JKLU, Jaipur, Rajasthan",
        period: "2023 – 2027",
        courses: [
            "Data Structures & Algorithms",
            "Database Management Systems",
            "Operating Systems",
            "Machine Learning",
            "Reinforcement Learning",
            "Full Stack Application Development"
        ],
    },
    {
        type: "experience",

        title: "Teaching Assistant for Programming II",
        org: "JKLU, Jaipur, Rajasthan",
        period: "2024",
        highlights: [
            "Conducted interactive lab sessions to guide students through complex programming paradigms.",
            "Assisted the professor in structuring coursework and delivering highly technical content.",
            "Mentored underperforming students to efficiently debug and optimize their code."
        ],
    },
    {
        type: "experience",

        title: "Research Intern",
        org: "LNMIIT, Jaipur",
        period: "2024",
        highlights: [
            "Researched and implemented Traffic Image Segmentation using advanced computer vision architectures.",
            "Designed analytical pipelines to accurately tag complex roadway structures and vehicle patterns.",
            "Contributed to enhancing the accuracy and performance of automated monitoring systems."
        ],
    },
    {
        type: "education",

        title: "Visiting Student",
        org: "IIIT Hyderabad, Telangana",
        period: "July 2025 – December 2025",
        courses: [
            "Blockchain and Web3 Development",
            "Digital Image Processing",
            "Language Models and Agents",
            "Statistical Methods for AI"
        ],
    },
];

export default function Timeline() {
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"]
    });

    return (
        <section className="timeline section" id="timeline">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Education & Experience</h2>
                    <p>My journey so far</p>
                </div>

                <div className="timeline__track">
                    <div className="timeline__line-container" ref={timelineRef}>
                        <motion.div
                            className="timeline__line-fill"
                            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
                        />
                    </div>
                    {timelineItems.map((item, i) => (
                        <motion.div
                            key={i}
                            className={`timeline__item ${i % 2 === 0 ? "timeline__item--left" : "timeline__item--right"}`}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 60, damping: 15, delay: i * 0.15 }}
                        >
                            <div className="timeline__content timeline-card-modern">
                                <div className="timeline-card-modern__glow"></div>
                                <div className="timeline-card-modern__content-wrap">
                                    <div className="timeline__type badge">{item.type}</div>
                                    <h3 className="timeline__title">{item.title}</h3>
                                    <p className="timeline__org">{item.org}</p>
                                    <p className="timeline__period">{item.period}</p>
                                    {item.desc && <p className="timeline__desc">{item.desc}</p>}
                                    {item.courses && (
                                        <div className="timeline__courses">
                                            {item.courses.map((course, idx) => (
                                                <span key={idx} className="timeline__course-badge">{course}</span>
                                            ))}
                                        </div>
                                    )}
                                    {item.highlights && (
                                        <ul className="timeline__highlights">
                                            {item.highlights.map((highlight, idx) => (
                                                <li key={idx}>
                                                    <span className="timeline__bullet">▹</span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
