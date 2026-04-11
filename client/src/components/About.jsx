import { useEffect } from "react";
import AOS from "aos";
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
                                {/* Replace src with actual photo in public/ */}
                                <div className="about__photo-placeholder">A</div>
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
                            I'm a full-stack developer passionate about creating seamless digital
                            experiences. I specialize in the MERN stack — building scalable
                            React frontends backed by Node.js/Express APIs and MongoDB databases.
                        </p>

                        <p className="about__bio">
                            Currently pursuing my degree in Computer Science. When I'm not writing
                            code, I explore machine learning, contribute to open-source projects,
                            and participate in hackathons.
                        </p>

                        <div className="about__meta">
                            <div className="about__meta-item">
                                <span className="about__meta-icon">📍</span>
                                <span>India</span>
                            </div>
                            <div className="about__meta-item">
                                <span className="about__meta-icon">🎓</span>
                                <span>CS Student</span>
                            </div>
                            <div className="about__meta-item">
                                <span className="about__meta-icon">💼</span>
                                <span>Available for Internships</span>
                            </div>
                        </div>

                        <div className="about__stats">
                            {[
                                { label: "Projects Built", value: "10+" },
                                { label: "Technologies", value: "15+" },
                                { label: "Hackathons", value: "3+" },
                            ].map((stat) => (
                                <div key={stat.label} className="about__stat card">
                                    <span className="about__stat-value gradient-text">{stat.value}</span>
                                    <span className="about__stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
