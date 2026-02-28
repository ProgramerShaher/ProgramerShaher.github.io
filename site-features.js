/**
 * Language switcher + CV button + contact form UX helpers
 */
(function () {
    'use strict';

    const DEFAULT_LANG = 'en';
    const LANG_KEY = 'siteLang';

    const translations = {
        en: {
            pageTitle: 'Shaher AL-Yaari | Full-Stack Web & Mobile Developer',
            profileTitle: 'Full-Stack Web & Mobile Developer',
            menu: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
            heroTitle: 'Full-Stack Web & Mobile Developer',
            heroDescription: 'I build high-performance, modern web and mobile applications using today\'s best technologies.',
            heroButtons: ['View My Work', 'Contact Me'],
            cvButton: 'Download CV (EN)',
            cvHref: 'cv/Shaher-CV-EN.pdf',
            aboutTitle: 'About <span class="highlight">Me</span>',
            aboutSubtitle: 'Get to know my background and experience',
            aboutHeading: 'Information Technology Student & Ambitious Full-Stack Developer',
            aboutParagraphs: [
                'I am a passionate 24-year-old Information Technology student in my final year at 21 September University, expected to graduate this year.',
                'I specialize in building dynamic web solutions with modern technologies such as ASP.NET Core, MVC, and Angular.',
                'As graduation approaches, I am eager to contribute to innovative companies and continue growing as a professional developer.'
            ],
            aboutInfo: [
                ['Education', 'Information Technology Student - Final Year'],
                ['Specialization', 'Web Development'],
                ['Technologies', 'ASP.NET Core, MVC, Angular'],
                ['Goal', 'Join Innovative Companies']
            ],
            skillsTitle: 'My Technical <span class="highlight">Skills</span>',
            skillsSubtitle: 'Technologies and tools I use to build great digital products',
            filters: ['All', 'Frontend', 'Backend', 'Mobile', 'Tools'],
            projectsTitle: 'Featured <span class="highlight">Projects</span>',
            projectsSubtitle: 'A selection of my latest projects and solutions',
            projectTitles: [
                'Mocca Coffee Online Store',
                'Smart Pharmacy Management System',
                'Law Office Management Mobile App',
                'Law Office Management Web System',
                'Law Office Management Web System',
                'Smart Hospital HR Management System'
            ],
            projectDescriptions: [
                'An online coffee store that provides product browsing, cart management, and a smooth purchase journey with a modern, responsive UI.',
                'A complete pharmacy management system for medications, inventory tracking, sales, and reports to improve daily operations.',
                'A cross-platform mobile application for managing legal cases, clients, schedules, and office workflow for law firms.',
                'A web platform built with ASP.NET Core Web API and Angular to manage cases, clients, legal documents, sessions, and office finances.',
                'A web platform built with ASP.NET Core Web API and Angular to manage cases, clients, legal documents, sessions, and office finances.',
                'A complete HR system for hospitals to manage staff records, shifts, attendance, leave, and HR workflows with secure, modern architecture.'
            ],
            contactTitle: 'Contact Me',
            contactSubtitle: 'Let\'s work together or just say hello',
            contactHeader: 'Let\'s Talk!',
            contactHeaderText: 'I am always open to discussing new projects and opportunities',
            contactDetails: ['Location', 'Email', 'Phone'],
            formTitle: 'Send Me a Message',
            formLabels: ['Full Name', 'Email', 'Subject', 'Message'],
            formPlaceholders: ['Your full name', 'Your email address', 'Message subject', 'Write your message...'],
            sendButton: 'Send Message',
            formSuccess: 'Your message was sent successfully.',
            languageLabel: 'Language',
            footerTitles: ['About This Site', 'Quick Links', 'Services', 'Contact'],
            footerAbout: 'I am a passionate developer and designer creating digital experiences that make a difference.',
            footerQuickLinks: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
            footerServices: ['Web Development', 'UI/UX Design', 'Mobile Apps', 'Consulting'],
            footerCopyright: '© 2025 Shaher AL-Yaari. All rights reserved.'
        },
        ar: {
            pageTitle: 'شاهر اليعري | مطور ويب وموبايل متكامل',
            profileTitle: 'مطور ويب وموبايل متكامل',
            menu: ['الرئيسية', 'نبذة عني', 'المهارات', 'المشاريع', 'تواصل معي'],
            heroTitle: 'مطور ويب وتطبيقات موبايل متكامل',
            heroDescription: 'أقوم ببناء تطبيقات ويب وموبايل احترافية تجمع بين الأداء العالي والتصميم العصري، باستخدام أحدث التقنيات.',
            heroButtons: ['شاهد أعمالي', 'تواصل معي'],
            cvButton: 'تحميل السيرة الذاتية (AR)',
            cvHref: 'cv/Shaher-CV-AR.pdf',
            aboutTitle: 'نبذة <span class="highlight">عني</span>',
            aboutSubtitle: 'تعرف أكثر على خلفيتي وخبراتي',
            aboutHeading: 'طالب تقنية معلومات ومطور متكامل طموح',
            aboutParagraphs: [
                'أنا طالب تقنية معلومات شغوف يبلغ من العمر 24 عامًا في سنتي الأخيرة بجامعة 21 سبتمبر، ومن المقرر أن أتخرج هذا العام.',
                'أتميز في بناء حلول ويب ديناميكية باستخدام التقنيات الحديثة مثل ASP.NET Core و MVC و Angular.',
                'مع اقتراب التخرج، أتطلع بشغف لإحضار وجهة نظري الجديدة وتفاني للشركات المبتكرة والاستمرار في النمو كمطور محترف.'
            ],
            aboutInfo: [
                ['التعليم', 'طالب تقنية معلومات - السنة النهائية'],
                ['التخصص', 'تطوير الويب'],
                ['التقنيات', 'ASP.NET Core, MVC, Angular'],
                ['الهدف', 'الانضمام لشركات مبتكرة']
            ],
            skillsTitle: 'مهاراتي <span class="highlight">التقنية</span>',
            skillsSubtitle: 'التقنيات والأدوات التي أتقنها لإنشاء تجارب رقمية مذهلة',
            filters: ['الكل', 'الواجهة الأمامية', 'الخلفية', 'الموبايل', 'أدوات'],
            projectsTitle: 'مشاريعي <span class="highlight">المميزة</span>',
            projectsSubtitle: 'مجموعة من أحدث الأعمال والحلول التي أنجزتها',
            projectTitles: [
                'متجر موكا للقهوة عبر الإنترنت',
                'نظام إدارة الصيدلية الذكي',
                'تطبيق موبايل لإدارة مكاتب المحاماة',
                'نظام ويب لإدارة مكاتب المحاماة',
                'نظام ويب لإدارة مكاتب المحاماة',
                'نظام إدارة الموارد البشرية الذكي للمستشفيات'
            ],
            projectDescriptions: [
                'متجر إلكتروني للقهوة يوفر عرض المنتجات، إدارة السلة، وتجربة شراء سلسة بواجهة حديثة ومتجاوبة.',
                'نظام متكامل لإدارة الصيدلية يشمل الأدوية، المخزون، المبيعات، والتقارير لتحسين كفاءة العمل اليومي.',
                'تطبيق موبايل متعدد المنصات لإدارة القضايا والعملاء والمواعيد وسير العمل داخل مكاتب المحاماة.',
                'منصة ويب مبنية بـ ASP.NET Core Web API و Angular لإدارة القضايا والعملاء والمستندات والجلسات والجانب المالي للمكتب.',
                'منصة ويب مبنية بـ ASP.NET Core Web API و Angular لإدارة القضايا والعملاء والمستندات والجلسات والجانب المالي للمكتب.',
                'نظام متكامل لأتمتة عمليات الموارد البشرية في المستشفيات وإدارة الموظفين والورديات والحضور والإجازات بكفاءة عالية.'
            ],
            contactTitle: 'تواصل معي',
            contactSubtitle: 'تواصل معي للتعاون أو لمجرد السلام',
            contactHeader: 'لنتحدث!',
            contactHeaderText: 'أنا دائمًا منفتح لمناقشة المشاريع الجديدة والفرص',
            contactDetails: ['الموقع', 'البريد الإلكتروني', 'الهاتف'],
            formTitle: 'أرسل لي رسالة',
            formLabels: ['الاسم الكامل', 'البريد الإلكتروني', 'الموضوع', 'الرسالة'],
            formPlaceholders: ['اكتب اسمك الكامل', 'اكتب بريدك الإلكتروني', 'موضوع الرسالة', 'اكتب رسالتك هنا...'],
            sendButton: 'إرسال الرسالة',
            formSuccess: 'تم إرسال رسالتك بنجاح.',
            languageLabel: 'اللغة',
            footerTitles: ['عن الموقع', 'روابط سريعة', 'الخدمات', 'تواصل'],
            footerAbout: 'أنا مطور ومصمم شغوف أقوم بإنشاء تجارب رقمية تحدث فرقًا.',
            footerQuickLinks: ['الرئيسية', 'نبذة عني', 'المهارات', 'المشاريع', 'تواصل معي'],
            footerServices: ['تطوير الويب', 'تصميم UI/UX', 'تطبيقات الموبايل', 'الاستشارات'],
            footerCopyright: '© 2025 شاهر اليعري. جميع الحقوق محفوظة.'
        }
    };

    function selectText(selector, value) {
        const element = document.querySelector(selector);
        if (element) element.textContent = value;
    }

    function setButtonWithIcon(selector, iconClass, label) {
        const element = document.querySelector(selector);
        if (!element) return;
        element.innerHTML = '<i class="' + iconClass + '"></i> ' + label;
    }

    function selectHTML(selector, value) {
        const element = document.querySelector(selector);
        if (element) element.innerHTML = value;
    }

    function setNodeList(selector, values) {
        const nodes = document.querySelectorAll(selector);
        nodes.forEach((node, index) => {
            if (values[index] !== undefined) {
                node.textContent = values[index];
            }
        });
    }

    function applyLanguage(lang) {
        const t = translations[lang] || translations[DEFAULT_LANG];
        const root = document.documentElement;

        root.lang = lang;
        root.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.title = t.pageTitle;
        const titleTag = document.querySelector('meta[name="title"]');
        if (titleTag) titleTag.setAttribute('content', t.pageTitle);

        selectText('.profile-title', t.profileTitle);
        setNodeList('.sidebar-menu .menu-link span', t.menu);
        selectText('.hero h1', t.heroTitle);
        selectText('.hero p', t.heroDescription);
        setButtonWithIcon('.hero-btns a:nth-child(1)', 'fas fa-rocket', t.heroButtons[0]);
        setButtonWithIcon('.hero-btns a:nth-child(2)', 'fas fa-paper-plane', t.heroButtons[1]);

        const cvBtn = document.getElementById('cvDownloadBtn');
        if (cvBtn) {
            cvBtn.href = t.cvHref;
            const label = cvBtn.querySelector('span');
            if (label) {
                label.textContent = t.cvButton;
            } else {
                cvBtn.innerHTML = '<i class="fas fa-file-download"></i> <span>' + t.cvButton + '</span>';
            }
        }

        selectHTML('#about .section-title h2', t.aboutTitle);
        selectText('#about .section-title p', t.aboutSubtitle);
        selectText('#about .about-text h3', t.aboutHeading);
        setNodeList('#about .about-text > p', t.aboutParagraphs);
        const infoItems = document.querySelectorAll('#about .info-item');
        infoItems.forEach((item, index) => {
            const heading = item.querySelector('.info-content h4');
            const paragraph = item.querySelector('.info-content p');
            if (t.aboutInfo[index]) {
                if (heading) heading.textContent = t.aboutInfo[index][0];
                if (paragraph) paragraph.textContent = t.aboutInfo[index][1];
            }
        });

        selectHTML('#skills .section-title h2', t.skillsTitle);
        selectText('#skills .section-title p', t.skillsSubtitle);
        setNodeList('#skills .filter-btn', t.filters);

        selectHTML('#projects .section-title h2', t.projectsTitle);
        selectText('#projects .section-title p', t.projectsSubtitle);
        setNodeList('.project-title', t.projectTitles);
        setNodeList('.project-desc', t.projectDescriptions);

        selectText('#contact .section-title h2', t.contactTitle);
        selectText('#contact .section-title p', t.contactSubtitle);
        selectText('#contact .contact-header h3', t.contactHeader);
        selectText('#contact .contact-header p', t.contactHeaderText);
        setNodeList('#contact .contact-text h4', t.contactDetails);

        selectText('.contact-form-title', t.formTitle);
        setNodeList('.form-label', t.formLabels);
        const placeholders = document.querySelectorAll('.contact-form .form-input');
        placeholders.forEach((input, index) => {
            if (t.formPlaceholders[index] !== undefined) {
                input.placeholder = t.formPlaceholders[index];
            }
        });
        selectText('.form-submit-btn span', t.sendButton);
        selectText('.language-label', t.languageLabel);

        const footerColumns = document.querySelectorAll('.footer-col h4');
        footerColumns.forEach((heading, index) => {
            if (t.footerTitles[index] !== undefined) {
                heading.textContent = t.footerTitles[index];
            }
        });
        const footerAbout = document.querySelector('.footer-col p');
        if (footerAbout) footerAbout.textContent = t.footerAbout;
        setNodeList('.footer-col:nth-child(2) .footer-links a', t.footerQuickLinks);
        setNodeList('.footer-col:nth-child(3) .footer-links a', t.footerServices);
        selectText('.footer-bottom p', t.footerCopyright);

        localStorage.setItem(LANG_KEY, lang);
    }

    function initLanguage() {
        const languageSelect = document.getElementById('languageSelect');
        const saved = localStorage.getItem(LANG_KEY);
        const lang = saved || DEFAULT_LANG;

        if (languageSelect) {
            languageSelect.value = lang;
            languageSelect.addEventListener('change', function () {
                applyLanguage(this.value);
            });
        }

        applyLanguage(lang);
    }

    function initFormStatus() {
        const status = document.getElementById('formStatusMessage');
        if (!status) return;

        const query = new URLSearchParams(window.location.search);
        if (query.get('sent') === '1') {
            const lang = localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
            status.textContent = translations[lang].formSuccess;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            initLanguage();
            initFormStatus();
        });
    } else {
        initLanguage();
        initFormStatus();
    }
})();
