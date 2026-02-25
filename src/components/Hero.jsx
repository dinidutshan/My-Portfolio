import { useEffect, useRef } from 'react'
import { personalInfo } from '../data/portfolioData'
import '../styles/Hero.css'

const TITLES = personalInfo.titles

export default function Hero() {
    const canvasRef = useRef(null)
    const titleRef = useRef(null)
    const currentIdx = useRef(0)

    // Particle canvas
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        let W, H, particles = [], raf

        const resize = () => {
            W = canvas.width = window.innerWidth
            H = canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        class Particle {
            constructor() { this.reset() }
            reset() {
                this.x = Math.random() * W; this.y = Math.random() * H
                this.r = Math.random() * 1.8 + 0.4
                this.vx = (Math.random() - 0.5) * 0.4; this.vy = (Math.random() - 0.5) * 0.4
                this.alpha = Math.random() * 0.5 + 0.1
                this.color = Math.random() > 0.5 ? '124,58,237' : '6,182,212'
            }
            update() {
                this.x += this.vx; this.y += this.vy
                if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset()
            }
            draw() {
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${this.color},${this.alpha})`
                ctx.fill()
            }
        }

        const create = () => {
            const count = Math.floor((W * H) / 12000)
            particles = Array.from({ length: count }, () => new Particle())
        }
        create()
        window.addEventListener('resize', create)

        const drawLines = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const d = Math.sqrt(dx * dx + dy * dy)
                    if (d < 120) {
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.strokeStyle = `rgba(124,58,237,${(1 - d / 120) * 0.12})`
                        ctx.lineWidth = 0.6; ctx.stroke()
                    }
                }
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, W, H)
            particles.forEach(p => { p.update(); p.draw() })
            drawLines()
            raf = requestAnimationFrame(animate)
        }
        animate()

        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('resize', resize)
            window.removeEventListener('resize', create)
        }
    }, [])

    // Rotating title
    useEffect(() => {
        const spans = titleRef.current?.querySelectorAll('.title-item')
        if (!spans || !spans.length) return
        const interval = setInterval(() => {
            spans[currentIdx.current].classList.remove('active')
            currentIdx.current = (currentIdx.current + 1) % spans.length
            spans[currentIdx.current].classList.add('active')
        }, 2800)
        return () => clearInterval(interval)
    }, [])

    // Mouse parallax on hero visual
    const visualRef = useRef(null)
    useEffect(() => {
        const onMove = (e) => {
            if (window.innerWidth < 1024 || !visualRef.current) return
            const xPct = (e.clientX / window.innerWidth - 0.5) * 10
            const yPct = (e.clientY / window.innerHeight - 0.5) * 10
            visualRef.current.style.transform = `translate(${xPct}px,${yPct}px)`
        }
        document.addEventListener('mousemove', onMove)
        return () => document.removeEventListener('mousemove', onMove)
    }, [])

    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
    }

    return (
        <section className="hero" id="home">
            <canvas ref={canvasRef} id="particles-canvas" />

            <div className="hero-content">
                <div className="hero-badge">
                    <span className="badge-dot" /> Available for opportunities
                </div>
                <h1 className="hero-name">
                    <span className="name-first">{personalInfo.firstName}</span>
                    <span className="name-last"> {personalInfo.lastName}</span>
                </h1>
                <div className="hero-titles" ref={titleRef}>
                    {TITLES.map((t, i) => (
                        <span key={t} className={`title-item${i === 0 ? ' active' : ''}`}>{t}</span>
                    ))}
                </div>
                <p className="hero-tagline">{personalInfo.tagline}</p>
                <div className="hero-location">
                    <i className="fas fa-map-marker-alt" />
                    <span>{personalInfo.location}</span>
                </div>
                <div className="hero-actions">
                    <button onClick={() => scrollTo('projects')} className="btn-primary">
                        <i className="fas fa-rocket" /> View My Work
                    </button>
                    <button onClick={() => scrollTo('contact')} className="btn-secondary">
                        <i className="fas fa-envelope" /> Get In Touch
                    </button>
                </div>
                <div className="hero-socials">
                    <a href={`mailto:${personalInfo.email}`} className="social-link" title="Email"><i className="fas fa-envelope" /></a>
                    <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="social-link" title="Phone"><i className="fas fa-phone" /></a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-link" title="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-link" title="GitHub"><i className="fab fa-github" /></a>
                </div>
            </div>

            <div className="hero-visual" ref={visualRef}>
                <div className="hero-avatar-ring">
                    <div className="hero-avatar">
                        {personalInfo.profileImage ? (
                            <img src={personalInfo.profileImage} alt={personalInfo.name} className="hero-avatar-img" />
                        ) : (
                            <div className="avatar-initials">DT</div>
                        )}
                    </div>
                    <div className="ring ring-1" />
                    <div className="ring ring-2" />
                    <div className="ring ring-3" />
                    <div className="orbit-dot dot-1"><i className="fab fa-python" /></div>
                    <div className="orbit-dot dot-2"><i className="fab fa-react" /></div>
                    <div className="orbit-dot dot-3"><i className="fab fa-java" /></div>
                    <div className="orbit-dot dot-4"><i className="fab fa-github" /></div>
                </div>
            </div>

            <div className="scroll-cue">
                <span>Scroll</span>
                <div className="scroll-line" />
            </div>
        </section>
    )
}
