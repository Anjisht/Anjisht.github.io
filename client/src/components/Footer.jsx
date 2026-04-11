import "./Footer.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer" id="footer">
            <div className="container footer__inner">
                <p className="footer__copy">
                    © {year} <span className="gradient-text">Anjisht</span>. Built with
                    React &amp; ❤️
                </p>
                <div className="footer__links">
                    <a href="https://github.com/Anjisht" target="_blank" rel="noopener noreferrer" id="footer-github">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/anjisht" target="_blank" rel="noopener noreferrer" id="footer-linkedin">
                        LinkedIn
                    </a>
                    <a href="#contact" id="footer-contact">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
