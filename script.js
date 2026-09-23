document.addEventListener('DOMContentLoaded', function () {

    /* ============================================================
       THEME TOGGLE
       ============================================================ */
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

    /* ============================================================
       LANGUAGE TOGGLE (EN / IND) — DEFAULT: ENGLISH
       ============================================================ */
    const translations = {
        en: {
            // NAVBAR
            nav_home: "Home",
            nav_projects: "Projects",
            nav_skills: "Skills",
            nav_experience: "Experience",
            nav_contact: "Contact",
            nav_hire: "Hire Me",

            // HERO
            hero_eyebrow: "Frontend Developer & UI/UX Designer",
            hero_greeting: "Hi, I'm",
            hero_desc: "I'm a frontend developer and UI/UX designer with a passion for crafting responsive, user-friendly web and mobile applications. Currently studying at Universitas Esa Unggul.",
            hero_btn_work: "View My Work",
            hero_btn_talk: "Let's Talk",

            // PROJECTS
            proj_eyebrow: "Portfolio",
            proj_title: "Featured Projects",
            proj_desc: "A selection of my work across web and mobile platforms.",
            proj1_desc: "Responsive event rental website with online booking features, with Leaflet Maps integration.",
            proj2_desc: "Online pharmacy ordering system with Leaflet Maps integration, shopping cart, and checkout.",
            proj3_desc: "Company profile website with animations, responsive layout, and Figma-to-code implementation.",
            proj4_desc: "High-fidelity interactive prototype with user flow, wireframes, and smart animate animations.",
            proj5_desc: "Fully responsive admin dashboard template built with HTML, CSS, Bootstrap, and JavaScript.",
            proj6_desc: "Collection of UI/UX designs, wireframes, and interactive prototypes for various projects.",

            // BUTTONS
            btn_live: "Live Demo",
            btn_live_short: "Live",
            btn_code: "Code",
            btn_proto: "View Prototype",
            btn_gallery: "View Gallery",

            // GALLERY
            gallery_eyebrow: "Gallery",
            gallery_title: "Figma Design Gallery",
            gallery_desc: "A showcase of my UI/UX design work created in Figma.",
            gallery_back: "Back to Projects",
            gal_mobile: "Mobile App Design",
            gal_web: "Website Design",
            gal1_desc: "Wireframe and prototype for Bali tourism recommendation application",
            gal2_desc: "Wireframe and prototype for Billiard booking application",
            gal3_desc: "Wireframe and prototype for attendance and monitoring application for SDN Rancagong 2",
            gal4_desc: "Wireframe and prototype for PT Supraindo Multi Sejahtera website",
            gal5_desc: "Wireframe and prototype of news portal website",
            gal6_desc: "Wireframe and prototype for Kanzza application",

            // SKILLS
            skills_eyebrow: "Expertise",
            skills_title: "Tech Stack & Tools",
            skill_lang: "Languages",
            skill_framework: "Frameworks",
            skill_design: "Design",
            skill_others: "Others",

            // EXPERIENCE
            exp_eyebrow: "Career",
            exp_title: "Work Experience",
            exp1_pill: "Customer Service",
            exp1_date: "Aug 2026 – Present",
            exp1_badge: "Full-time",
            exp1_li1: "Handled customer inquiries and issues through WhatsApp and HeyBARDI chat services",
            exp1_li2: "Provided information and guidance to customers regarding BARDI products and application usage",
            exp1_li3: "Performed troubleshooting based on customer-reported device information and conditions",
            exp1_li4: "Assisted customers with issues such as Wi-Fi connection, pairing, device reset, and app feature usage",
            exp1_li5: "Coordinated with related teams for issues requiring further checking or escalation",
            exp2_pill: "Frontend",
            exp2_date: "Sept 2024 – Oct 2024",
            exp2_badge: "Freelance",
            exp2_li1: "Designed wireframes & prototypes in Figma",
            exp2_li2: "Built responsive website with HTML, CSS, Bootstrap, JS",
            exp2_li3: "Implemented scroll animations & hover effects",
            exp2_li4: "Optimized for all device sizes",
            exp3_pill: "UI/UX",
            exp3_title: "Freelance UI/UX Designer",
            exp3_date: "2024 – Present",
            exp3_badge: "Freelance",
            exp3_li1: "Designed high-fidelity prototypes in Figma",
            exp3_li2: "Created user flows & wireframes",
            exp3_li3: "Built interactive prototypes with Smart Animate",
            exp3_li4: "Collaborated with developers for implementation",

            // CTA / CONTACT
            cta_eyebrow: "Let's Connect",
            cta_title: "Have a project in mind?",
            cta_desc: "Let's collaborate and bring your ideas to life.",
            cta_email: "Email Me",
            cta_cv: "Download CV",

            // FOOTER
            footer_tagline: "Athar Aryasatya — Frontend Developer & UI/UX Designer",
            footer_nav: "Navigation",
            footer_contact: "Contact",
            footer_find: "Find Me"
        },
        id: {
            // NAVBAR
            nav_home: "Beranda",
            nav_projects: "Proyek",
            nav_skills: "Keahlian",
            nav_experience: "Pengalaman",
            nav_contact: "Kontak",
            nav_hire: "Rekrut Saya",

            // HERO
            hero_eyebrow: "Frontend Developer & UI/UX Designer",
            hero_greeting: "Hai, saya",
            hero_desc: "Saya seorang frontend developer dan UI/UX designer yang bersemangat dalam membangun aplikasi web dan mobile yang responsif dan mudah digunakan. Saat ini sedang menempuh studi di Universitas Esa Unggul.",
            hero_btn_work: "Lihat Karya Saya",
            hero_btn_talk: "Mari Bicara",

            // PROJECTS
            proj_eyebrow: "Portofolio",
            proj_title: "Proyek Unggulan",
            proj_desc: "Kumpulan karya saya di platform web dan mobile.",
            proj1_desc: "Website penyewaan tenda acara yang responsif dengan fitur pemesanan online, terintegrasi Leaflet Maps.",
            proj2_desc: "Sistem pemesanan obat apotek online dengan integrasi Leaflet Maps, keranjang belanja, dan checkout.",
            proj3_desc: "Website company profile dengan animasi, layout responsif, dan implementasi Figma-to-code.",
            proj4_desc: "Prototipe interaktif high-fidelity dengan user flow, wireframe, dan animasi smart animate.",
            proj5_desc: "Template dashboard admin yang sepenuhnya responsif dibangun dengan HTML, CSS, Bootstrap, dan JavaScript.",
            proj6_desc: "Koleksi desain UI/UX, wireframe, dan prototipe interaktif untuk berbagai proyek.",

            // BUTTONS
            btn_live: "Demo Langsung",
            btn_live_short: "Demo",
            btn_code: "Kode",
            btn_proto: "Lihat Prototipe",
            btn_gallery: "Lihat Galeri",

            // GALLERY
            gallery_eyebrow: "Galeri",
            gallery_title: "Galeri Desain Figma",
            gallery_desc: "Kumpulan karya desain UI/UX saya yang dibuat di Figma.",
            gallery_back: "Kembali ke Proyek",
            gal_mobile: "Desain Aplikasi Mobile",
            gal_web: "Desain Website",
            gal1_desc: "Wireframe dan prototipe aplikasi rekomendasi wisata Bali",
            gal2_desc: "Wireframe dan prototipe aplikasi pemesanan biliar",
            gal3_desc: "Wireframe dan prototipe aplikasi absensi dan monitoring untuk SDN Rancagong 2",
            gal4_desc: "Wireframe dan prototipe website PT Supraindo Multi Sejahtera",
            gal5_desc: "Wireframe dan prototipe website portal berita",
            gal6_desc: "Wireframe dan prototipe aplikasi Kanzza",

            // SKILLS
            skills_eyebrow: "Keahlian",
            skills_title: "Tech Stack & Tools",
            skill_lang: "Bahasa",
            skill_framework: "Framework",
            skill_design: "Desain",
            skill_others: "Lainnya",

            // EXPERIENCE
            exp_eyebrow: "Karier",
            exp_title: "Pengalaman Kerja",
            exp1_pill: "Layanan Pelanggan",
            exp1_date: "Agu 2026 – Sekarang",
            exp1_badge: "Penuh Waktu",
            exp1_li1: "Menangani pertanyaan dan keluhan pelanggan melalui WhatsApp dan layanan chat HeyBARDI",
            exp1_li2: "Memberikan informasi dan panduan kepada pelanggan terkait penggunaan produk dan aplikasi BARDI",
            exp1_li3: "Melakukan troubleshooting berdasarkan informasi dan kondisi perangkat yang disampaikan pelanggan",
            exp1_li4: "Membantu pelanggan menangani kendala seperti koneksi Wi-Fi, pairing, reset perangkat, dan penggunaan fitur aplikasi",
            exp1_li5: "Berkoordinasi dengan tim terkait apabila terdapat kendala yang membutuhkan pengecekan atau penanganan lebih lanjut",
            exp2_pill: "Frontend",
            exp2_date: "Sept 2024 – Okt 2024",
            exp2_badge: "Freelance",
            exp2_li1: "Merancang wireframe dan prototipe di Figma",
            exp2_li2: "Membangun website responsif dengan HTML, CSS, Bootstrap, JS",
            exp2_li3: "Mengimplementasikan animasi scroll dan efek hover",
            exp2_li4: "Mengoptimalkan tampilan untuk semua ukuran perangkat",
            exp3_pill: "UI/UX",
            exp3_title: "Freelance UI/UX Designer",
            exp3_date: "2024 – Sekarang",
            exp3_badge: "Freelance",
            exp3_li1: "Merancang prototipe high-fidelity di Figma",
            exp3_li2: "Membuat user flow dan wireframe",
            exp3_li3: "Membangun prototipe interaktif dengan Smart Animate",
            exp3_li4: "Berkolaborasi dengan developer untuk implementasi",

            // CTA / CONTACT
            cta_eyebrow: "Mari Terhubung",
            cta_title: "Punya proyek yang ingin diwujudkan?",
            cta_desc: "Mari berkolaborasi dan wujudkan ide Anda.",
            cta_email: "Kirim Email",
            cta_cv: "Unduh CV",

            // FOOTER
            footer_tagline: "Athar Aryasatya — Frontend Developer & UI/UX Designer",
            footer_nav: "Navigasi",
            footer_contact: "Kontak",
            footer_find: "Temukan Saya"
        }
    };

    const langToggle = document.getElementById('langToggle');
    const langOptions = document.querySelectorAll('.lang-option');

    let currentLang = localStorage.getItem('lang') || 'en';

    function applyLanguage(lang) {
        if (!translations[lang]) lang = 'en';

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        document.documentElement.setAttribute('lang', lang === 'id' ? 'id' : 'en');

        langOptions.forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });
        langToggle.setAttribute('data-active', lang);

        currentLang = lang;
        localStorage.setItem('lang', lang);
    }

    langToggle.addEventListener('click', function () {
        const nextLang = currentLang === 'en' ? 'id' : 'en';
        applyLanguage(nextLang);
    });

    langToggle.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const nextLang = currentLang === 'en' ? 'id' : 'en';
            applyLanguage(nextLang);
        }
    });

    langOptions.forEach(opt => {
        opt.addEventListener('click', function (e) {
            e.stopPropagation();
            applyLanguage(this.getAttribute('data-lang'));
        });
    });

    applyLanguage(currentLang);

    /* ============================================================
       NAVIGATION ACTIVE
       ============================================================ */
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

    /* ============================================================
       SMOOTH SCROLL
       ============================================================ */
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

    /* ============================================================
       MOBILE NAV - CLOSE
       ============================================================ */
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