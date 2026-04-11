import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

const projects = [
    {
        id: 1,
        title: "Multilingual Language Model",
        description:
            "A transformer-based multilingual NLP model supporting English–Hindi–Mizo translation. Trained on custom datasets with fine-tuning for low-resource language pairs.",
        tech: ["Python", "PyTorch", "Transformers", "HuggingFace"],
        github: "https://github.com/Anjisht",
        live: "#",
        category: "AI/ML",
    },
    {
        id: 2,
        title: "SME AI Agent (Computer Networks)",
        description:
            "An intelligent Subject Matter Expert agent that answers advanced computer networking questions using retrieval-augmented generation (RAG) and LLM integration.",
        tech: ["Python", "LangChain", "OpenAI", "FAISS"],
        github: "https://github.com/Anjisht",
        live: "#",
        category: "AI/ML",
    },
    {
        id: 3,
        title: "JKLU Mess Management Portal",
        description:
            "A full-stack web portal for managing mess operations at JKLU — featuring menu management, feedback collection, and student meal tracking.",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        github: "https://github.com/Anjisht",
        live: "#",
        category: "Web",
    },
];

const allTechs = ["All", ...new Set(projects.flatMap((p) => p.tech))];

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

                {/* Filter Tabs */}
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

                {/* Cards Grid */}
                <div className="projects__grid">
                    <AnimatePresence mode="wait">
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.id}
                                className="project-card card"
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                layout
                            >
                                <div className="project-card__header">
                                    <span className="project-card__category badge">{project.category}</span>
                                    <div className="project-card__links">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            id={`github-${project.id}`}
                                            aria-label="GitHub"
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            id={`live-${project.id}`}
                                            aria-label="Live Demo"
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <h3 className="project-card__title">{project.title}</h3>
                                <p className="project-card__desc">{project.description}</p>

                                <div className="project-card__tech">
                                    {project.tech.map((t) => (
                                        <span key={t} className="badge">{t}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
