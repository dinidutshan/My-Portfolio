import { useState, useEffect } from 'react'
import '../styles/BackToTop.css'

export default function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div
            className={`back-to-top${visible ? ' visible' : ''}`}
            onClick={scrollUp}
            aria-label="Back to top"
        >
            <i className="fas fa-arrow-up" />
        </div>
    )
}
