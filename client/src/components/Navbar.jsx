import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import "./Navbar.css";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#timeline" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const { isDark, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`} id="navbar">
            <div className="navbar__inner container">
                <a href="#" className="navbar__logo">
                    <span className="gradient-text">Anjisht</span>
                    <span className="navbar__dot">.</span>
                </a>

                <nav className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="navbar__link"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="navbar__actions">
                    <button
                        className="navbar__theme-btn"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        id="theme-toggle"
                    >
                        {isDark ? "☀️" : "🌙"}
                    </button>

                    <button
                        className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        id="hamburger-btn"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </div>
        </header>
    );
}
