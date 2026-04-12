import { useEffect } from "react";
import AOS from "aos";
import profileImg from "../assets/4.png";
import "./About.css";

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
    }, []);

    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>About Me</h2>
                    <p>A little bit about who I am and what I do</p>
                </div>

                <div className="about__grid">
                    <div className="about__photo-wrap" data-aos="fade-right">
                        <div className="about__photo-ring">
                            <div className="about__photo">
                                <img src={profileImg} alt="Anjisht" className="about__photo-img" />
                            </div>
                        </div>
                        <div className="about__status-badge">
                            <span className="about__status-dot" />
                            Open to opportunities
                        </div>
                    </div>

                    <div className="about__info" data-aos="fade-left" data-aos-delay="100">
                        <h3 className="about__heading">
                            Hi! I'm <span className="gradient-text">Anjisht</span>
                        </h3>

                        <p className="about__bio">
                            I'm a CS undergrad with a split personality — half builder, half mathematician.
                            On the engineering side, I specialize in full-stack development (MERN stack) and
                            applied ML, I've trained multilingual transformers, built RAG pipelines, and deployed end-to-end
                            models.
                        </p>

                        <p className="about__bio">
                            On the research side, I'm deeply interested in reinforcement learning and the
                            mathematics that underpins intelligent systems — I'm currently studying number theory and stochastic processes,
                            not because I have to, but because I find the formalism genuinely beautiful.
                        </p>
                        <p className="about__bio">
                            When I'm not writing code, I'm probably working out, out on a run,
                            buried in a novel, or lost with my acoustic guitar.
                        </p>

                        <div className="about__meta">
                            <div className="about__meta-item">
                                <span className="about__meta-icon">📍</span>
                                <span>Jaipur, Rajasthan, India</span>
                            </div>
                            <div className="about__meta-item">
                                <span className="about__meta-icon">🎓</span>
                                <span>Third year CS Student</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
