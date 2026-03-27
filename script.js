// ============================================================
//  Stacy Chen – Academic Website Script
// ============================================================

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle?.setAttribute('aria-expanded', 'false');
        navToggle?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});

// ---------- Active nav link based on current page ----------
(function setActiveNav() {
    const path     = window.location.pathname.replace(/\/$/, '');
    const page     = path.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-link').forEach(link => {
        const href     = link.getAttribute('href') || '';
        const linkPage = href.split('/').pop();
        const isHome   = (page === '' || page === 'index.html') &&
                         (linkPage === 'index.html' || linkPage === '');
        if (isHome || linkPage === page) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
})();

// ---------- Research interest accordion ----------
document.querySelectorAll('.ri-card').forEach(card => {
    card.addEventListener('click', () => {
        const area   = card.dataset.area;
        const panel  = document.getElementById('expand-' + area);
        if (!panel) return;

        const isOpen = !panel.hidden;

        // Close all other panels first
        document.querySelectorAll('.ri-expand').forEach(p => {
            p.hidden = true;
        });
        document.querySelectorAll('.ri-card').forEach(c => {
            c.classList.remove('is-open');
            c.setAttribute('aria-expanded', 'false');
        });

        // Toggle the clicked one
        if (!isOpen) {
            panel.hidden = false;
            card.classList.add('is-open');
            card.setAttribute('aria-expanded', 'true');

            // Smooth scroll so panel is visible
            setTimeout(() => {
                panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 30);
        }
    });

    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-expanded', 'false');

    // Keyboard support
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});
