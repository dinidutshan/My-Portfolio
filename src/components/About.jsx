import { aboutMe, personalInfo } from '../data/portfolioData'
import '../styles/About.css'

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">WHO I AM</span>
                    <h2 className="section-title">About <span className="highlight">Me</span></h2>
                </div>
                <div className="about-grid">
                    {/* Left card */}
                    <div className="about-visual">
                        <div className="about-card-main" data-aos>
                            <div className="about-avatar-big">
                                {personalInfo.profileImage ? (
                                    <img src={personalInfo.profileImage} alt={personalInfo.name} className="about-avatar-img" />
                                ) : (
                                    <div className="avatar-initials-big">DT</div>
                                )}
                            </div>
                            <h3 className="about-name">{personalInfo.name}</h3>
                            <p className="about-role">Business Analyst &amp; Project Manager</p>
                            <div className="about-stats">
                                {aboutMe.stats.map((s, i) => (
                                    <>
                                        {i > 0 && <div className="stat-divider" key={`div-${i}`} />}
                                        <div className="stat-item" key={s.label}>
                                            <span className="stat-num">{s.num}</span>
                                            <span className="stat-label">{s.label}</span>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>

                        <div className="languages-card" data-aos>
                            <h4><i className="fas fa-globe" /> Languages</h4>
                            <div className="lang-tags">
                                {aboutMe.languages.map((l) => (
                                    <span className="lang-tag" key={l.name}>{l.flag} {l.name}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right content */}
                    <div className="about-content" data-aos>
                        {aboutMe.bio.map((para, i) => (
                            <p
                                key={i}
                                className="about-bio"
                                dangerouslySetInnerHTML={{ __html: para }}
                            />
                        ))}
                        <div className="soft-skills">
                            <h4>Soft Skills</h4>
                            <div className="soft-skills-grid">
                                {aboutMe.softSkills.map((s) => (
                                    <div className="soft-skill" key={s.label}>
                                        <i className={s.icon} /> {s.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="about-cta">
                            <a href={personalInfo.cvFile} download className="btn-primary">
                                <i className="fas fa-download" /> Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
