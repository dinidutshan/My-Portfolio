import { education } from '../data/portfolioData'
import '../styles/Education.css'

export default function Education() {
    return (
        <section className="education section" id="education">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">MY JOURNEY</span>
                    <h2 className="section-title">Education &amp; <span className="highlight">Certifications</span></h2>
                </div>
                <div className="edu-timeline">
                    {education.map((edu) => (
                        <div
                            key={edu.id}
                            className={`edu-card${edu.type === 'university' ? ' featured' : ''}`}
                            data-aos
                        >
                            <div className={`edu-icon-wrap ${edu.type}`}>
                                <i className={edu.icon} />
                            </div>
                            <div className="edu-body">
                                <div className="edu-meta">
                                    <span className={`edu-year${edu.active ? ' active-badge' : ''}`}>
                                        {edu.active && <i className="fas fa-circle" />} {edu.year}
                                    </span>
                                    <span className="edu-type">{edu.eduType}</span>
                                </div>
                                <h3 className="edu-title">{edu.degree}</h3>
                                <p className="edu-institution">
                                    <i className={edu.type === 'university' ? 'fas fa-map-marker-alt' : edu.type === 'school' ? 'fas fa-school' : 'fas fa-building'} />
                                    {edu.institution}
                                </p>
                                {edu.gpa && (
                                    <div className="edu-gpa">
                                        <span className="gpa-label">GPA</span>
                                        <span className="gpa-value">{edu.gpa}</span>
                                        <span className="gpa-sub">{edu.gpaSub}</span>
                                    </div>
                                )}
                                {edu.results && <p className="edu-results"><strong>Results:</strong> {edu.results}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
