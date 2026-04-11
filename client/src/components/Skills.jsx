import { motion } from "framer-motion";
import "./Skills.css";

const skillCategories = [
    {
        category: "Frontend",
        icon: "🎨",
        skills: [
            { name: "React.js", level: 85 },
            { name: "JavaScript (ES6+)", level: 88 },
            { name: "HTML & CSS", level: 90 },
            { name: "Tailwind CSS", level: 80 },
        ],
    },
    {
        category: "Backend",
        icon: "⚙️",
        skills: [
            { name: "Node.js", level: 80 },
            { name: "Express.js", level: 78 },
            { name: "MongoDB", level: 75 },
            { name: "REST APIs", level: 82 },
        ],
    },
    {
        category: "Tools & Technologies",
        icon: "🛠",
        skills: [
            { name: "Git & GitHub", level: 85 },
            { name: "Docker (basics)", level: 55 },
            { name: "Postman", level: 80 },
            { name: "VS Code", level: 95 },
        ],
    },
];

function SkillBar({ name, level, delay = 0 }) {
    return (
        <div className="skill-bar" title={`${name}: ${level}% proficiency`}>
            <div className="skill-bar__header">
                <span className="skill-bar__name">{name}</span>
                <span className="skill-bar__level">{level}%</span>
            </div>
            <div className="skill-bar__track">
                <motion.div
                    className="skill-bar__fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay, ease: "easeOut" }}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section className="skills section" id="skills">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Skills</h2>
                    <p>Technologies I work with, grouped by category</p>
                </div>

                <div className="skills__grid">
                    {skillCategories.map((cat, catIdx) => (
                        <motion.div
                            key={cat.category}
                            className="skills__category card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: catIdx * 0.15 }}
                        >
                            <div className="skills__category-header">
                                <span className="skills__category-icon">{cat.icon}</span>
                                <h3 className="skills__category-title">{cat.category}</h3>
                            </div>

                            <div className="skills__bars">
                                {cat.skills.map((skill, i) => (
                                    <SkillBar
                                        key={skill.name}
                                        name={skill.name}
                                        level={skill.level}
                                        delay={catIdx * 0.15 + i * 0.1}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
