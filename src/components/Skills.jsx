import { useEffect, useRef } from 'react'
import { skills, proficiencies } from '../data/portfolioData'
import '../styles/Skills.css'

export default function Skills() {
    const barsRef = useRef(null)

    useEffect(() => {
        const bars = barsRef.current?.querySelectorAll('.prof-fill')
        if (!bars) return
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const bar = entry.target
                        setTimeout(() => { bar.style.width = bar.dataset.width + '%' }, 200)
                        observer.unobserve(bar)
                    }
                })
            },
            { threshold: 0.3 }
        )
        bars.forEach((bar) => observer.observe(bar))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">WHAT I KNOW</span>
                    <h2 className="section-title">Technical <span className="highlight">Skills</span></h2>
                </div>

                <div className="skills-grid">
                    {skills.map((cat) => (
                        <div className="skill-category" key={cat.id} data-aos>
                            <div className="skill-cat-header">
                                <i className={cat.icon} />
                                <h3>{cat.category}</h3>
                            </div>
                            <div className="skill-tags">
                                {cat.items.map((item) => (
                                    <span
                                        className={`skill-tag${item.featured ? ' featured-tag' : ''}`}
                                        key={item.label}
                                    >
                                        <i className={item.icon} /> {item.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="proficiency-section" ref={barsRef}>
                    <h3 className="proficiency-title">Core Competencies</h3>
                    <div className="prof-grid">
                        {proficiencies.map((p) => (
                            <div className="prof-item" key={p.label} data-aos>
                                <div className="prof-label">
                                    <span>{p.label}</span>
                                    <span className="prof-pct">{p.pct}%</span>
                                </div>
                                <div className="prof-bar">
                                    <div className="prof-fill" data-width={p.pct} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
