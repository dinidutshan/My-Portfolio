/* ============================================================
   DINIDU THILAKSHAN – PORTFOLIO JAVASCRIPT
   Features: particles, typed text, scroll animations, nav
   ============================================================ */

'use strict';

// ---- DOM Ready ---- //
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initNavbar();
    initTypedTitles();
    initScrollAnimations();
    initProficiencyBars();
    initContactForm();
    initBackToTop();
    initHamburger();
    initSmoothScroll();
});

/* ============================================================
   PARTICLES CANVAS
   ============================================================ */
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H, particles = [];

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', () => { resize(); createParticles(); });

    function Particle() {
        this.reset();
    }
    Particle.prototype.reset = function () {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.r = Math.random() * 1.8 + 0.4;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '124,58,237' : '6,182,212';
    };
    Particle.prototype.update = function () {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    };
    Particle.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
        ctx.fill();
    };

    function createParticles() {
        const count = Math.floor((W * H) / 12000);
        particles = Array.from({ length: count }, () => new Particle());
    }
    createParticles();

    // Draw connecting lines between nearby particles
    function drawLines() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    const alpha = (1 - dist / 120) * 0.12;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(124,58,237,${alpha})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => { p.update(); p.draw(); });
        drawLines();
        requestAnimationFrame(animate);
    }
    animate();
}

/* ============================================================
   NAVBAR
   ============================================================ */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateActiveLink();
    });

    function updateActiveLink() {
        const scrollPos = window.scrollY + 120;
        sections.forEach(section => {
            if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

/* ============================================================
   TYPED TITLE ANIMATION
   ============================================================ */
function initTypedTitles() {
    const titles = document.querySelectorAll('.title-item');
    if (!titles.length) return;
    let current = 0;

    function showNext() {
        titles[current].classList.remove('active');
        current = (current + 1) % titles.length;
        titles[current].classList.add('active');
    }
    setInterval(showNext, 2800);
}

/* ============================================================
   SCROLL ANIMATIONS (Intersection Observer)
   ============================================================ */
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, entry.target.dataset.delay || 0);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    // Add stagger delays to grid children
    const staggerContainers = [
        '.skills-grid',
        '.projects-grid',
        '.leadership-grid',
        '.refs-grid',
        '.edu-timeline',
    ];

    staggerContainers.forEach(selector => {
        const container = document.querySelector(selector);
        if (!container) return;
        const children = container.querySelectorAll('[data-aos]');
        children.forEach((child, i) => {
            child.dataset.delay = i * 80;
        });
    });

    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
}

/* ============================================================
   PROFICIENCY BARS
   ============================================================ */
function initProficiencyBars() {
    const bars = document.querySelectorAll('.prof-fill');
    if (!bars.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.dataset.width;
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, 200);
                    observer.unobserve(bar);
                }
            });
        },
        { threshold: 0.3 }
    );

    bars.forEach(bar => observer.observe(bar));
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const note = document.getElementById('formNote');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.submit-btn');
        const originalText = btn.innerHTML;

        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        // Simulate send (replace with real backend/emailjs integration)
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            note.textContent = '✅ Your message has been received! I\'ll get back to you soon.';
            note.className = 'form-note success';
            form.reset();
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                note.textContent = '';
                note.className = 'form-note';
            }, 4000);
        }, 1800);
    });
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ============================================================
   HAMBURGER MENU
   ============================================================ */
function initHamburger() {
    const btn = document.getElementById('hamburger');
    const nav = document.getElementById('navLinks');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        nav.classList.toggle('open');
        document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            btn.classList.remove('open');
            nav.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // Close on backdrop click
    nav.addEventListener('click', (e) => {
        if (e.target === nav) {
            btn.classList.remove('open');
            nav.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
}

/* ============================================================
   SMOOTH SCROLL
   ============================================================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
}

/* ============================================================
   CURSOR INTERACTION EFFECT ON HERO
   ============================================================ */
(function initMouseParallax() {
    const heroVisual = document.querySelector('.hero-visual');
    if (!heroVisual) return;

    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 1024) return;
        const xPct = (e.clientX / window.innerWidth - 0.5) * 10;
        const yPct = (e.clientY / window.innerHeight - 0.5) * 10;
        heroVisual.style.transform = `translate(${xPct}px, ${yPct}px)`;
    });
})();

/* ============================================================
   SKILL TAGS MICRO-ANIMATION
   ============================================================ */
(function initSkillHover() {
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transition = 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
})();
