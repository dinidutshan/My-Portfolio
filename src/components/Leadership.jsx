import { leadership } from '../data/portfolioData'
import '../styles/Leadership.css'

export default function Leadership() {
    return (
        <section className="leadership section" id="leadership">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">BEYOND CODE</span>
                    <h2 className="section-title">Leadership &amp; <span className="highlight">Activities</span></h2>
                </div>
                <div className="leadership-grid">
                    {leadership.map((item) => (
                        <div className="leader-card" key={item.id} data-aos>
                            <div className={`leader-icon-wrap ${item.iconClass}`}>
                                <i className={item.icon} />
                            </div>
                            <div className="leader-body">
                                <span className="leader-role-badge">{item.role}</span>
                                <h3 className="leader-title">{item.title}</h3>
                                <p className="leader-org">
                                    <i className="fas fa-university" /> {item.org}
                                </p>
                                {item.period && (
                                    <p className="leader-year">
                                        <i className="far fa-calendar-alt" /> {item.period}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
