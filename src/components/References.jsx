import { references } from '../data/portfolioData'
import '../styles/References.css'

export default function References() {
    return (
        <section className="references section" id="references">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">TESTIMONIALS</span>
                    <h2 className="section-title">Academic <span className="highlight">References</span></h2>
                </div>
                <div className="refs-grid">
                    {references.map((ref) => (
                        <div className="ref-card" key={ref.id} data-aos>
                            <div className="ref-avatar">{ref.initials}</div>
                            <div className="ref-body">
                                <h3 className="ref-name">{ref.name}</h3>
                                <p className="ref-position">{ref.position}</p>
                                <p className="ref-dept">{ref.dept}</p>
                                <p className="ref-uni">{ref.uni}</p>
                                <div className="ref-contacts">
                                    <a href={`mailto:${ref.email}`} className="ref-contact-link">
                                        <i className="fas fa-envelope" /> {ref.email}
                                    </a>
                                    <a href={`tel:${ref.phoneRaw}`} className="ref-contact-link">
                                        <i className="fas fa-phone" /> {ref.phone}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
