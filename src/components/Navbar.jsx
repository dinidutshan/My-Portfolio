import { useState, useEffect, useRef } from 'react'
import { personalInfo } from '../data/portfolioData'
import '../styles/Navbar.css'

const navItems = ['home', 'about', 'education', 'skills', 'projects', 'leadership', 'contact']

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 60)
            const sections = document.querySelectorAll('section[id]')
            const scrollPos = window.scrollY + 120
            sections.forEach((sec) => {
                if (sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
                    setActiveSection(sec.id)
                }
            })
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNavClick = (e, id) => {
        e.preventDefault()
        const el = document.getElementById(id)
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80
            window.scrollTo({ top, behavior: 'smooth' })
        }
        setMenuOpen(false)
        document.body.style.overflow = ''
    }

    const toggleMenu = () => {
        setMenuOpen((prev) => {
            document.body.style.overflow = prev ? '' : 'hidden'
            return !prev
        })
    }

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    DT<span className="logo-dot">.</span>
                </div>

                <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
                    {navItems.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item}`}
                                className={`nav-link${activeSection === item ? ' active' : ''}`}
                                onClick={(e) => handleNavClick(e, item)}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href={personalInfo.cvFile} download className="btn-cv-nav">
                            <i className="fas fa-download" /> Download CV
                        </a>
                    </li>
                </ul>

                <button
                    className={`hamburger${menuOpen ? ' open' : ''}`}
                    id="hamburger"
                    aria-label="Toggle menu"
                    onClick={toggleMenu}
                >
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    )
}
