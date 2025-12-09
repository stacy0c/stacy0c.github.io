// Tab functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const navLinks = document.querySelectorAll('.nav-link[data-tab-link]');

    function switchTab(tabName) {
        // Update tab buttons
        tabButtons.forEach(button => {
            const isActive = button.getAttribute('data-tab') === tabName;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-selected', isActive);
        });

        // Update tab panels
        tabPanels.forEach(panel => {
            const isActive = panel.id === `${tabName}-panel`;
            panel.classList.toggle('active', isActive);
        });

        // Update URL hash without scrolling
        if (history.pushState) {
            history.pushState(null, null, `#${tabName}`);
        }
    }

    // Tab button clicks
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    // Navigation link clicks (if nav links exist)
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const tabName = link.getAttribute('data-tab-link');
                switchTab(tabName);
            });
        });
    }

    // Handle initial hash
    const hash = window.location.hash.substring(1);
    if (hash && ['about', 'research', 'publications', 'cv', 'contact'].includes(hash)) {
        switchTab(hash);
    }
});


// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.research-card, .publication-item, .about-text');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

