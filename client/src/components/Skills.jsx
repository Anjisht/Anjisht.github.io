import { useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

// Dynamically import all SVG icons
const iconModules = import.meta.glob('../assets/iconset/**/*.svg', { eager: true, as: 'url' });

const categoryStyles = {
    "5. Languages": { label: "Language", color: "#22c55e" },
    "3.Framework": { label: "Framework", color: "#3b82f6" },
    "4.Library": { label: "Library", color: "#ec4899" },
    "2.Database": { label: "Database", color: "#f59e0b" },
    "1.Development": { label: "Development Tool", color: "#8b5cf6" },
};

const skillCategoriesInit = {};
Object.entries(categoryStyles).forEach(([key, val]) => {
    skillCategoriesInit[key] = {
        id: key,
        label: val.label,
        skills: []
    };
});

Object.entries(iconModules).forEach(([path, url]) => {
    const parts = path.split('/');
    const categoryGroup = parts[3];
    const nameSlug = parts[4];

    // Exceptions handling or standard casing
    let formattedName = nameSlug.charAt(0).toUpperCase() + nameSlug.slice(1).replace(/-/g, ' ');
    if (nameSlug.toLowerCase() === 'javascript') formattedName = 'JavaScript';
    if (nameSlug.toLowerCase() === 'html5') formattedName = 'HTML';
    if (nameSlug.toLowerCase() === 'css3') formattedName = 'CSS';

    if (skillCategoriesInit[categoryGroup]) {
        let hash = 0;
        for (let i = 0; i < nameSlug.length; i++) {
            hash = nameSlug.charCodeAt(i) + ((hash << 5) - hash);
        }
        const pseudoRandomLevel = 70 + (Math.abs(hash) % 26); // Returns 70 - 95

        skillCategoriesInit[categoryGroup].skills.push({
            name: formattedName,
            iconUrl: url,
            level: pseudoRandomLevel
        });
    }
});

const skillCategories = Object.keys(categoryStyles).map(k => skillCategoriesInit[k]).filter(cat => cat.skills.length > 0);

function SkillSquare({ name, level, iconUrl, delay }) {
    return (
        <motion.div
            className="skill-square"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, delay }}
        >
            <div className="skill-square__name">{name}</div>
            <div className="skill-square__icon">
                <img src={iconUrl} alt={name} />
            </div>
            <div className="skill-square__progress">
                <div className="skill-square__progress-bar">
                    <motion.div
                        className="skill-square__progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
                    />
                </div>
                <div className="skill-square__progress-text">{level}%</div>
            </div>
        </motion.div>
    );
}

const softSkillsData = [
    { name: "Communication", level: 90 },
    { name: "Problem Solving", level: 95 },
    { name: "Teamwork", level: 92 },
    { name: "Time Management", level: 85 },
    { name: "Adaptability", level: 88 },
    { name: "Critical Thinking", level: 94 },
    { name: "Networking", level: 80 },
    { name: "Presentation", level: 85 },
];

function SoftSkillBar({ name, level, delay }) {
    return (
        <div className="soft-skill">
            <div className="soft-skill__info">
                <span className="soft-skill__name">{name}</span>
                <span className="soft-skill__percentage">{level}%</span>
            </div>
            <div className="soft-skill__progress-bar">
                <motion.div
                    className="soft-skill__progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: delay, ease: "easeOut" }}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    const [activeTab, setActiveTab] = useState(skillCategories[0]?.id || "");
    const activeCategory = skillCategories.find(cat => cat.id === activeTab) || skillCategories[0];

    if (!activeCategory) return null;

    return (
        <section className="skills section" id="skills">
            <div className="skills__container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Technological Skills</h2>
                </div>

                <div className="skills__tabs" data-aos="fade-up" data-aos-delay="100">
                    {skillCategories.map(cat => (
                        <button
                            key={cat.id}
                            className={`skills__tab ${activeTab === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="skills__grid" key={activeTab}>
                    {activeCategory.skills.map((skill, i) => (
                        <SkillSquare
                            key={skill.name}
                            name={skill.name}
                            level={skill.level}
                            iconUrl={skill.iconUrl}
                            delay={Math.min(i * 0.05, 0.4)}
                        />
                    ))}
                </div>

                <div className="section-title soft-skills-title" data-aos="fade-up" style={{ marginTop: '4rem' }}>
                    <h2>Soft Skills</h2>
                </div>

                <div className="soft-skills__grid" data-aos="fade-up" data-aos-delay="100">
                    {softSkillsData.map((skill, i) => (
                        <SoftSkillBar
                            key={skill.name}
                            name={skill.name}
                            level={skill.level}
                            delay={i * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
