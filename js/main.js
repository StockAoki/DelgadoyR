document.addEventListener('DOMContentLoaded', () => {
    // === HEADER: transparente -> solido al hacer scroll ===
    const header = document.getElementById('siteHeader');
    if (header) {
        const onScroll = () => {
            header.classList.toggle('is-scrolled', window.scrollY > 60);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    // === MENU MOVIL ===
    const navToggle = document.getElementById('navToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (navToggle && mobileNav) {
        navToggle.addEventListener('click', () => {
            const isOpen = mobileNav.classList.toggle('is-open');
            navToggle.classList.toggle('is-active', isOpen);
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        mobileNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('is-open');
                navToggle.classList.remove('is-active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // === SCROLL REVEAL ===
    const revealEls = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window && revealEls.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach((el) => observer.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add('is-visible'));
    }

    // === SLIDER ANTES/DESPUES (arrastrable) ===
    const setupSlider = (sliderEl, afterEl, lineEl) => {
        if (!sliderEl || !afterEl || !lineEl) return;
        let dragging = false;

        const setPosition = (clientX) => {
            const rect = sliderEl.getBoundingClientRect();
            let pct = ((clientX - rect.left) / rect.width) * 100;
            pct = Math.max(0, Math.min(100, pct));
            afterEl.style.clipPath = `inset(0 0 0 ${pct}%)`;
            lineEl.style.left = `${pct}%`;
        };

        sliderEl.addEventListener('pointerdown', (e) => {
            dragging = true;
            sliderEl.setPointerCapture(e.pointerId);
            setPosition(e.clientX);
        });

        sliderEl.addEventListener('pointermove', (e) => {
            if (!dragging) return;
            setPosition(e.clientX);
        });

        const stopDrag = (e) => {
            dragging = false;
            if (sliderEl.hasPointerCapture && e.pointerId !== undefined && sliderEl.hasPointerCapture(e.pointerId)) {
                sliderEl.releasePointerCapture(e.pointerId);
            }
        };

        sliderEl.addEventListener('pointerup', stopDrag);
        sliderEl.addEventListener('pointercancel', stopDrag);
    };

    setupSlider(
        document.getElementById('baShowcase'),
        document.getElementById('baAfter'),
        document.getElementById('baLine')
    );

    // === GALERIA ANTES/DESPUES TOGGLE ===
    document.querySelectorAll('[data-toggle]').forEach((item) => {
        item.addEventListener('click', () => {
            const isAfter = item.classList.toggle('is-after');
            const label = item.querySelector('.ba-item-label');
            if (label) label.textContent = isAfter ? 'DESPUÉS' : 'ANTES';
        });
    });

    // === ESTADISTICAS ANIMADAS (count-up) ===
    const statEls = document.querySelectorAll('.stat-num');

    if ('IntersectionObserver' in window && statEls.length) {
        const animateCount = (el) => {
            const target = parseInt(el.getAttribute('data-count'), 10) || 0;
            const suffix = el.getAttribute('data-suffix') || '';
            const duration = 1200;
            const start = performance.now();

            const tick = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(eased * target) + suffix;
                if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
        };

        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    statObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statEls.forEach((el) => statObserver.observe(el));
    } else {
        statEls.forEach((el) => {
            const target = parseInt(el.getAttribute('data-count'), 10) || 0;
            const suffix = el.getAttribute('data-suffix') || '';
            el.textContent = target + suffix;
        });
    }

    // === GA4 EVENT TRACKING ===
    (function () {
        if (typeof gtag !== 'function') return;

        const SECTION_MAP = {
            inicio: 'hero',
            servicios: 'servicios',
            nosotros: 'nosotros',
            'antes-despues': 'antes_despues',
            faq: 'faq',
            testimonios: 'testimonios',
            contacto: 'contacto',
        };

        function getLinkLocation(el) {
            if (el.classList.contains('whatsapp-float')) return 'floating_button';
            let node = el.parentElement;
            while (node && node !== document.body) {
                if (node.tagName === 'HEADER') return 'nav';
                if (node.id === 'mobileNav') return 'nav_mobile';
                if (node.tagName === 'FOOTER') return 'footer';
                if (node.tagName === 'SECTION') return SECTION_MAP[node.id] || node.id || 'section';
                node = node.parentElement;
            }
            return 'page';
        }

        document.addEventListener('click', function (e) {
            const link = e.target.closest('a[href]');
            if (!link) return;

            const href = link.href;
            const location = getLinkLocation(link);

            if (href.includes('wa.me')) {
                const params = { link_location: location };
                if (link.dataset.servicio) params.servicio = link.dataset.servicio;
                if (link.dataset.producto) params.producto = link.dataset.producto;
                gtag('event', 'click_whatsapp', params);
                return;
            }

            if (href.startsWith('tel:')) {
                gtag('event', 'click_telefono', { link_location: location });
                return;
            }

            if (href.startsWith('mailto:')) {
                gtag('event', 'click_email', {
                    link_location: location,
                    email: href.replace('mailto:', '').split('?')[0],
                });
                return;
            }

            let url;
            try { url = new URL(href); } catch (err) { return; }
            if (url.hostname === window.location.hostname) return;

            const hostname = url.hostname.replace(/^www\./, '');

            if (hostname.includes('instagram.com')) {
                gtag('event', 'click_instagram', { link_location: location });
                return;
            }

            if (hostname.includes('google.com') && href.includes('maps')) {
                gtag('event', 'click_navegacion', { destino: 'google_maps', link_location: location });
                return;
            }

            if (hostname.includes('waze.com')) {
                gtag('event', 'click_navegacion', { destino: 'waze', link_location: location });
                return;
            }

            gtag('event', 'click_externo', {
                destino: link.dataset.destino || hostname,
                link_location: location,
            });
        });
    }());

    // === FAQ ACORDION (una sola pregunta abierta) ===
    document.querySelectorAll('.faq-item').forEach((item) => {
        item.addEventListener('toggle', () => {
            if (item.open) {
                document.querySelectorAll('.faq-item[open]').forEach((other) => {
                    if (other !== item) other.removeAttribute('open');
                });
            }
        });
    });

    // === CARRUSEL DE TESTIMONIOS (solo mobile) ===
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    const tDots = document.querySelectorAll('.t-dot');

    if (testimonialsGrid && tDots.length && window.innerWidth <= 768) {
        const cards = testimonialsGrid.querySelectorAll('.testimonial-card');
        let current = 0;
        let autoTimer = null;
        let isPaused = false;

        const goTo = (index) => {
            current = (index + cards.length) % cards.length;
            testimonialsGrid.scrollTo({ left: cards[current].offsetLeft, behavior: 'smooth' });
            tDots.forEach((d, i) => d.classList.toggle('t-dot--active', i === current));
        };

        const startAuto = () => {
            autoTimer = setInterval(() => { if (!isPaused) goTo(current + 1); }, 3500);
        };

        tDots.forEach((dot, i) => {
            dot.addEventListener('click', () => goTo(i));
        });

        testimonialsGrid.addEventListener('touchstart', () => { isPaused = true; }, { passive: true });
        testimonialsGrid.addEventListener('touchend', () => {
            setTimeout(() => {
                const scrollLeft = testimonialsGrid.scrollLeft;
                let closest = 0;
                let minDist = Infinity;
                cards.forEach((card, i) => {
                    const dist = Math.abs(card.offsetLeft - scrollLeft);
                    if (dist < minDist) { minDist = dist; closest = i; }
                });
                current = closest;
                tDots.forEach((d, i) => d.classList.toggle('t-dot--active', i === current));
                isPaused = false;
            }, 300);
        }, { passive: true });

        startAuto();
    }
});
