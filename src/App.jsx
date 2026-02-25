import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import References from './components/References'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import './styles/index.css'

function App() {
    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        )

        // Stagger children inside grid containers
        const staggerSelectors = [
            '.skills-grid',
            '.projects-grid',
            '.leadership-grid',
            '.refs-grid',
            '.edu-timeline',
        ]
        staggerSelectors.forEach((sel) => {
            const container = document.querySelector(sel)
            if (!container) return
            container.querySelectorAll('[data-aos]').forEach((el, i) => {
                el.style.transitionDelay = `${i * 80}ms`
            })
        })

        document.querySelectorAll('[data-aos]').forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Leadership />
                <References />
                <Contact />
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}

export default App
