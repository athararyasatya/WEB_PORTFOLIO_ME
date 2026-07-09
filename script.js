document.addEventListener('DOMContentLoaded', function () {

    // THEME TOGGLE
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-bs-theme', savedTheme);
    updateIcon(savedTheme);

    themeToggle.addEventListener('click', function () {
        const current = html.getAttribute('data-bs-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-bs-theme', next);
        localStorage.setItem('theme', next);
        updateIcon(next);
        this.style.transform = 'scale(0.85)';
        setTimeout(() => { this.style.transform = ''; }, 200);
    });

    function updateIcon(theme) {
        themeIcon.className = theme === 'dark' ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
    }

    // NAVIGATION ACTIVE
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.top-nav .nav-link');

    function highlightNav() {
        const scrollY = window.scrollY + 120;
        sections.forEach(s => {
            const top = s.offsetTop;
            const h = s.offsetHeight;
            const id = s.getAttribute('id');
            if (scrollY >= top && scrollY < top + h) {
                navLinks.forEach(l => l.classList.remove('active'));
                const active = document.querySelector(`.top-nav .nav-link[href="#${id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', highlightNav, { passive: true });

    // SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
                if (history.pushState) history.pushState(null, null, targetId);
            }
        });
    });

    // MOBILE NAV - CLOSE
    const toggler = document.getElementById('navbarToggler');
    const collapse = document.getElementById('mainNav');
    const navbar = document.getElementById('mainNavbar');

    if (toggler && collapse) {
        toggler.addEventListener('click', function () {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
        });

        collapse.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function () {
                if (window.innerWidth < 992) {
                    const bs = bootstrap.Collapse.getInstance(collapse);
                    if (bs) bs.hide();
                    toggler.setAttribute('aria-expanded', 'false');
                }
            });
        });

        document.addEventListener('click', function (e) {
            if (collapse.classList.contains('show')) {
                const inside = navbar.contains(e.target);
                const onToggler = toggler.contains(e.target);
                if (!inside && !onToggler) {
                    const bs = bootstrap.Collapse.getInstance(collapse);
                    if (bs) bs.hide();
                    toggler.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }

    console.log('%c🚀 Athar Aryasatya Portfolio', 'font-size:20px; font-weight:700; color:#7b42bc;');
    console.log('%c✅ Portfolio loaded!', 'font-size:14px; color:#b2b6bd;');
});