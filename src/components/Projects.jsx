import { projects } from '../data/portfolioData'
import '../styles/Projects.css'

export default function Projects() {
    return (
        <section className="projects section" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">MY WORK</span>
                    <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
                </div>
                <div className="projects-grid">
                    {projects.map((proj) => (
                        <div
                            key={proj.id}
                            className={`project-card${proj.featured ? ' featured-project' : ''}${proj.isIot ? ' iot-card' : ''}`}
                            data-aos
                        >
                            <div className="project-header">
                                <div className={`project-icon ${proj.iconClass}`}>
                                    <i className={proj.icon} />
                                </div>
                                <div className={`project-status ${proj.status}`}>
                                    {proj.status === 'ongoing' && <i className="fas fa-circle" />}
                                    {proj.status === 'completed' && <i className="fas fa-check-circle" />}
                                    {proj.statusLabel}
                                </div>
                            </div>

                            <h3 className="project-title">{proj.title}</h3>
                            <p className="project-subtitle">{proj.subtitle}</p>

                            {proj.desc && <p className="project-desc">{proj.desc}</p>}

                            {proj.iotSubs && (
                                <div className="iot-sub-projects">
                                    {proj.iotSubs.map((sub) => (
                                        <div className="iot-sub" key={sub.label}>
                                            <i className={sub.icon} />
                                            <span>{sub.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {proj.techs && (
                                <div className="project-techs">
                                    {proj.techs.map((t) => (
                                        <span className={`tech-badge${t.cls ? ' ' + t.cls : ''}`} key={t.label}>{t.label}</span>
                                    ))}
                                </div>
                            )}

                            <div className="project-highlights">
                                {proj.highlights.map((h) => (
                                    <div className="highlight-item" key={h}>
                                        <i className="fas fa-check-circle" /> {h}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
