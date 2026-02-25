import { personalInfo } from '../data/portfolioData'
import '../styles/Footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">DT<span className="logo-dot">.</span></div>
                        <p className="footer-tagline">Business Analyst | Project Manager | ICT Undergraduate</p>
                        <div className="footer-socials">
                            <a href={`mailto:${personalInfo.email}`} className="footer-social"><i className="fas fa-envelope" /></a>
                            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="footer-social"><i className="fab fa-linkedin-in" /></a>
                            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="footer-social"><i className="fab fa-github" /></a>
                            <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="footer-social"><i className="fas fa-phone" /></a>
                        </div>
                    </div>

                    <div className="footer-links-col">
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#skills">Skills</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-col">
                        <h4>More</h4>
                        <ul>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#leadership">Leadership</a></li>
                            <li><a href="#references">References</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-col">
                        <h4>Download</h4>
                        <a href={personalInfo.cvFile} download className="footer-cv-btn">
                            <i className="fas fa-file-pdf" /> My CV (PDF)
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Dinidu Thilakshan. All rights reserved.</p>
                    <p>Designed &amp; Built with <i className="fas fa-heart" style={{ color: '#f43f5e' }} /> using React &amp; Vite</p>
                </div>
            </div>
        </footer>
    )
}
