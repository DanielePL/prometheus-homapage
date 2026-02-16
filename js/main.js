// ============================================
// PHONE CAROUSEL ANIMATION
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    const stage = document.getElementById('phone-stage');
    if (!stage) return;

    const phones = stage.querySelectorAll('.phone:not(.center)');

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                phones.forEach(el => {
                    el.classList.add('in');
                });
                io.disconnect();
            }
        });
    }, { threshold: 0.25 });

    io.observe(stage);
});

// ============================================
// SCROLL REVEAL (Intersection Observer)
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// WAITLIST BUTTON FUNCTIONALITY
// ============================================

function scrollToWaitlist() {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
        waitlistSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
}

document.querySelectorAll('.btn-waitlist, .cta-footer .btn-primary').forEach(btn => {
    btn.addEventListener('click', scrollToWaitlist);
});

// ============================================
// HEADER HIDE/SHOW ON SCROLL
// ============================================

let lastScrollTop = 0;
const header = document.querySelector('.header');
header.style.transition = 'transform 0.3s ease';

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        if (scrollTop > lastScrollTop) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
    } else {
        header.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// ============================================
// ACTIVE NAVIGATION INDICATOR
// ============================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
            link.style.color = 'var(--primary-orange)';
        } else {
            link.style.color = '';
        }
    });
});

// ============================================
// PERFORMANCE OPTIMIZATION - LAZY LOADING
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '1';
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
            imageObserver.observe(img);
        });
    }
});

// ============================================
// PAGE LOAD ANIMATION
// ============================================

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});
