import { useState } from 'react'
import { personalInfo } from '../data/portfolioData'
import '../styles/Contact.css'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [status, setStatus] = useState('')
    const [submitting, setSubmitting] = useState(false)

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitting(true)
        setStatus('')
        setTimeout(() => {
            setSubmitting(false)
            setStatus('success')
            setForm({ name: '', email: '', subject: '', message: '' })
            setTimeout(() => setStatus(''), 4000)
        }, 1800)
    }

    const contacts = [
        { icon: 'fas fa-envelope', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: 'fas fa-phone', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
        { icon: 'fas fa-map-marker-alt', label: 'Location', value: personalInfo.location, href: null },
        { icon: 'fab fa-linkedin-in', label: 'LinkedIn', value: 'dinidu-thilakshan-454803287', href: personalInfo.linkedin, iconClass: 'linkedin' },
        { icon: 'fab fa-github', label: 'GitHub', value: 'github.com/dinidutshan', href: personalInfo.github, iconClass: 'github' },
    ]

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">SAY HELLO</span>
                    <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
                </div>
                <div className="contact-grid">
                    <div className="contact-info" data-aos>
                        <p className="contact-intro">I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out!</p>
                        <div className="contact-items">
                            {contacts.map((c) =>
                                c.href ? (
                                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-item" key={c.label}>
                                        <div className={`contact-item-icon${c.iconClass ? ' ' + c.iconClass : ''}`}><i className={c.icon} /></div>
                                        <div className="contact-item-body">
                                            <span className="contact-item-label">{c.label}</span>
                                            <span className="contact-item-value">{c.value}</span>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="contact-item non-link" key={c.label}>
                                        <div className="contact-item-icon"><i className={c.icon} /></div>
                                        <div className="contact-item-body">
                                            <span className="contact-item-label">{c.label}</span>
                                            <span className="contact-item-value">{c.value}</span>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                        <a href={personalInfo.cvFile} download className="btn-primary contact-cv-btn">
                            <i className="fas fa-download" /> Download CV
                        </a>
                    </div>

                    <div className="contact-form-wrap" data-aos>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            {[
                                { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                                { id: 'email', label: 'Your Email', type: 'email', placeholder: 'john@example.com' },
                                { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Job Opportunity' },
                            ].map((field) => (
                                <div className="form-group" key={field.id}>
                                    <label htmlFor={field.id}>{field.label}</label>
                                    <input
                                        type={field.type}
                                        id={field.id}
                                        name={field.id}
                                        placeholder={field.placeholder}
                                        value={form[field.id]}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            ))}
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Tell me about the opportunity..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn-primary submit-btn" disabled={submitting}>
                                {submitting
                                    ? <><i className="fas fa-spinner fa-spin" /> Sending...</>
                                    : <><i className="fas fa-paper-plane" /> Send Message</>}
                            </button>
                            {status === 'success' && (
                                <div className="form-note success">✅ Message received! I'll get back to you soon.</div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
