import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import mizoImg from "../assets/project_pic/mizo.png";
import web3Img from "../assets/project_pic/web3.png";
import messImg from "../assets/project_pic/mess.png";

const projects = [
    {
        id: 1,
        title: "Multilingual Language Model",
        description:
            "A transformer-based multilingual NLP model supporting English–Hindi–Mizo translation. Trained on custom datasets with fine-tuning for low-resource language pairs.",
        tech: ["Python", "PyTorch", "Transformers", "HuggingFace"],
        github: "https://github.com/Anjisht/Multilingual-Model-Mizo-",
        imageUrl: mizoImg,
        category: "AI/ML",
    },
    {
        id: 2,
        title: "Edu-Credit DApp",
        description:
            "A decentralized blockchain application designed to securely manage, verify, and issue educational credits directly on-chain using smart contracts.",
        tech: ["Solidity", "React", "Ethers.js", "Hardhat"],
        github: "https://github.com/Anjisht/edu-credit-dapp",
        imageUrl: web3Img,
        category: "Web3",
    },
    {
        id: 3,
        title: "JKLU Mess Portal",
        description:
            "A full-stack web portal for managing mess operations at JKLU — featuring menu management, feedback collection, and student meal tracking.",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        github: "https://github.com/JKLU-MessPortal/Mess-Portal-",
        imageUrl: messImg,
        category: "Web",
    },
];

const allTechs = ["All", ...new Set(projects.flatMap((p) => p.tech))];

function getTechColor(tech) {
    const predefinedColors = {
        Python: "#7cd2f7",
        "Unreal Engine": "#ff9ea7",
        "Socket Programming": "#86eca5",
        "C++": "#80c4ff",
        OpenCV: "#ff8fab",
        React: "#61dafb",
        "Node.js": "#8cc84b",
        MongoDB: "#4db33d",
        Express: "#e5e5e5",
        PyTorch: "#ee4c2c",
        Transformers: "#ffd21e",
        HuggingFace: "#ffd21e",
        LangChain: "#ffffff",
        OpenAI: "#ffffff",
        FAISS: "#0052cc"
    };
    if (predefinedColors[tech]) return predefinedColors[tech];

    // Fallback deterministic pastel generator
    let hash = 0;
    for (let i = 0; i < tech.length; i++) hash = tech.charCodeAt(i) + ((hash << 5) - hash);
    return `hsl(${Math.abs(hash) % 360}, 80%, 75%)`;
}

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const filtered =
        filter === "All"
            ? projects
            : projects.filter((p) => p.tech.includes(filter));

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Projects</h2>
                    <p>A showcase of things I've built</p>
                </div>

                <div className="projects__filters" data-aos="fade-up" data-aos-delay="100">
                    {allTechs.slice(0, 8).map((tech) => (
                        <button
                            key={tech}
                            id={`filter-${tech.toLowerCase().replace(/\s|\.|\//g, "-")}`}
                            className={`projects__filter-btn ${filter === tech ? "active" : ""}`}
                            onClick={() => setFilter(tech)}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                <div className="projects__grid-list">
                    <AnimatePresence mode="wait">
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.id}
                                className="project-row"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                layout
                            >
                                {/* Left Side: Image Block */}
                                <div className="project-row__image-block">
                                    {project.imageUrl ? (
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="project-row__image"
                                        />
                                    ) : (
                                        <div className="project-row__image-placeholder">
                                            <span>Project Image</span>
                                        </div>
                                    )}
                                </div>

                                {/* Right Side: Content Block */}
                                <div className="project-row__content">
                                    <div className="project-row__tech-stack">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="project-row__tech-pill"
                                                style={{ backgroundColor: getTechColor(t), color: '#121212' }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="project-row__title">{project.title}</h3>
                                    <p className="project-row__desc">{project.description}</p>

                                    <div className="project-row__links">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
