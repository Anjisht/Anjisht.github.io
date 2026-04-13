import "./Footer.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer" id="footer">
            <div className="container footer__inner">
                <p className="footer__copy">
                    Forged with 🤍 by <span className="gradient-text">Anjisht</span>.
                </p>
                <div className="footer__links">
                    <a href="https://github.com/Anjisht" target="_blank" rel="noopener noreferrer" id="footer-github">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/anjisht-amritanshu-2b46b8285/" target="_blank" rel="noopener noreferrer" id="footer-linkedin">
                        LinkedIn
                    </a>

                </div>
            </div>
        </footer>
    );
}
