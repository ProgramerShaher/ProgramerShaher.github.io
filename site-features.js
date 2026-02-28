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
            projectTags: [
                ['ASP.NET Core 10', 'Web API', 'Angular 21', 'TypeScript', 'SQL Server', 'TailwindCSS', 'PrimeNg'],
                ['ASP.NET Core 10', 'Web API', 'Angular 21', 'TypeScript', 'SQL Server', 'TailwindCSS', 'PrimeNg'],
                ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
                ['ASP.NET Core', 'Web API', 'Angular', 'TypeScript', 'SQL Server'],
                ['Flutter', 'Dart', 'Mobile Development', 'Cross-Platform'],
                ['.NET MVC 8', 'Bootstrap', 'C#', 'SQL Server'],
                ['.NET MVC', 'Bootstrap', 'C#', 'SQL Server'],
                ['.NET API', 'Angular', 'TailwindCSS', 'PrimeNg', 'TypeScript']
            ],
            projectTitles: [
                'Smart Hospital HR Management System',
                'Smart Pharmacy Management System',
                'Mocca Coffee Online Store',
                'Law Office Management Web System',
                'Law Office Management Mobile App',
                'Shopping Online E-Commerce Store',
                'Global News Network',
                'School Management System'
            ],
            projectDescriptions: [
                'A comprehensive HR system for hospitals to manage staff records, shifts, attendance, leave, performance evaluation, and recruitment with secure, modern architecture built with ASP.NET Core 10, Angular 21, and SQL Server.',
                'A complete pharmacy management system for medications, inventory tracking, sales, and reports to improve daily operations. Built with ASP.NET Core 10, Angular 21, TypeScript, and SQL Server.',
                'An online coffee store that provides product browsing, cart management, and a smooth purchase journey with a modern, responsive UI. Built with PHP, HTML, CSS, JavaScript, and MySQL.',
                'A web platform built with ASP.NET Core Web API and Angular to manage cases, clients, legal documents, sessions, and office finances with professional UI/UX.',
                'A cross-platform mobile application for managing legal cases, clients, schedules, and office workflow for law firms. Built with Flutter and Dart.',
                'A modern e-commerce online store built with .NET MVC 8 and Bootstrap. Features product management, shopping cart, and secure checkout process.',
                'A dynamic news network website featuring breaking news, category sections, and multimedia content. Built with .NET MVC and Bootstrap technologies.',
                'A comprehensive school management system for student records, teacher schedules, and academic reports. Built with .NET API, Angular, TailwindCSS, and PrimeNg.'
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
            footerServices: ['Web Development', 'Mobile Development', 'System Design', 'Consulting'],
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
            projectTags: [
                ['ASP.NET Core 10', 'Web API', 'Angular 21', 'TypeScript', 'SQL Server', 'TailwindCSS', 'PrimeNg'],
                ['ASP.NET Core 10', 'Web API', 'Angular 21', 'TypeScript', 'SQL Server', 'TailwindCSS', 'PrimeNg'],
                ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
                ['ASP.NET Core', 'Web API', 'Angular', 'TypeScript', 'SQL Server'],
                ['Flutter', 'Dart', 'تطوير الموبايل', 'متعدد المنصات'],
                ['.NET MVC 8', 'Bootstrap', 'C#', 'SQL Server'],
                ['.NET MVC', 'Bootstrap', 'C#', 'SQL Server'],
                ['.NET API', 'Angular', 'TailwindCSS', 'PrimeNg', 'TypeScript']
            ],
            projectTitles: [
                'نظام إدارة الموارد البشرية الذكي للمستشفيات',
                'نظام إدارة الصيدلية الذكي',
                'متجر موكا للقهوة عبر الإنترنت',
                'نظام ويب لإدارة مكاتب المحاماة',
                'تطبيق موبايل لإدارة مكاتب المحاماة',
                'متجر التسوق الإلكتروني',
                'شبكة الأخبار العالمية',
                'نظام إدارة المدارس'
            ],
            projectDescriptions: [
                'نظام متكامل لأتمتة عمليات الموارد البشرية في المستشفيات وإدارة الموظفين والورديات والحضور والإجازات وتقييم الأداء والتوظيف بكفاءة عالية. مبني بـ ASP.NET Core 10 و Angular 21 و SQL Server.',
                'نظام متكامل لإدارة الصيدلية يشمل الأدوية والمخزون والمبيعات والتقارير لتحسين كفاءة العمل اليومي. مبني بـ ASP.NET Core 10 و Angular 21 و TypeScript و SQL Server.',
                'متجر إلكتروني للقهوة يوفر عرض المنتجات وإدارة السلة وتجربة شراء سلسة بواجهة حديثة ومتجاوبة. مبني بـ PHP و HTML و CSS و JavaScript و MySQL.',
                'منصة ويب متطورة مبنية بـ ASP.NET Core Web API و Angular لإدارة احترافية لمكاتب المحاماة مع إدارة القضايا والعملاء والمستندات والجلسات والجانب المالي.',
                'تطبيق موبايل احترافي مبني بـ Flutter لإدارة شاملة لمكاتب المحاماة مع متابعة القضايا والعملاء والمواعيد والجلسات والوثائق القانونية.',
                'متجر تسوق إلكتروني حديث مبني بـ .NET MVC 8 و Bootstrap يوفر إدارة المنتجات وسلة التسوق والدفع الآمن.',
                'موقع شبكة أخبار ديناميكي يعرض الأخبار العاجلة والأقسام المختلفة والمحتوى المتعدد الوسائط. مبني بـ .NET MVC و Bootstrap.',
                'نظام شامل لإدارة المدارس يتضمن سجلات الطلاب وجداول المعلمين والتقارير الأكاديمية. مبني بـ .NET API و Angular و TailwindCSS و PrimeNg.'
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
            footerServices: ['تطوير الويب', 'تطوير الموبايل', 'تصميم الأنظمة', 'الاستشارات'],
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

        const profileTitle = document.querySelector('.profile-title');
        if (profileTitle) profileTitle.textContent = t.profileTitle;
        const menuItems = document.querySelectorAll('.sidebar-menu .menu-link span');
        menuItems.forEach((el, i) => {
            if (t.menu[i]) el.textContent = t.menu[i];
        });
        const heroTitle = document.querySelector('.hero h1');
        const heroDesc = document.querySelector('.hero p');
        if (heroTitle) heroTitle.textContent = t.heroTitle;
        if (heroDesc) heroDesc.textContent = t.heroDescription;
        const heroBtn1 = document.querySelector('.hero-btns a:nth-child(1)');
        const heroBtn2 = document.querySelector('.hero-btns a:nth-child(2)');
        if (heroBtn1) heroBtn1.innerHTML = '<i class="fas fa-rocket"></i> ' + t.heroButtons[0];
        if (heroBtn2) heroBtn2.innerHTML = '<i class="fas fa-paper-plane"></i> ' + t.heroButtons[1];

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

        const aboutTitleEl = document.querySelector('#about .section-title h2');
        if (aboutTitleEl) aboutTitleEl.innerHTML = t.aboutTitle;
        selectText('#about .section-title p', t.aboutSubtitle);
        selectText('#about .about-text h3', t.aboutHeading);
        const aboutParagraphs = document.querySelectorAll('#about .about-text > p');
        aboutParagraphs.forEach((el, i) => {
            if (t.aboutParagraphs && t.aboutParagraphs[i]) el.textContent = t.aboutParagraphs[i];
        });
        const infoItems = document.querySelectorAll('#about .info-item');
        infoItems.forEach((item, index) => {
            const heading = item.querySelector('.info-content h4');
            const paragraph = item.querySelector('.info-content p');
            if (t.aboutInfo && t.aboutInfo[index]) {
                if (heading) heading.textContent = t.aboutInfo[index][0];
                if (paragraph) paragraph.textContent = t.aboutInfo[index][1];
            }
        });

        const skillsTitleEl = document.querySelector('#skills .section-title h2');
        if (skillsTitleEl) skillsTitleEl.innerHTML = t.skillsTitle;
        selectText('#skills .section-title p', t.skillsSubtitle);
        const filterBtns = document.querySelectorAll('#skills .filter-btn');
        filterBtns.forEach((el, i) => {
            if (t.filters[i]) el.textContent = t.filters[i];
        });

        const projectsTitleEl = document.querySelector('#projects .section-title h2');
        if (projectsTitleEl) projectsTitleEl.innerHTML = t.projectsTitle;
        selectText('#projects .section-title p', t.projectsSubtitle);
        const projectTitles = document.querySelectorAll('.project-title');
        const projectDescs = document.querySelectorAll('.project-desc');
        projectTitles.forEach((el, i) => {
            if (t.projectTitles[i]) el.textContent = t.projectTitles[i];
        });
        projectDescs.forEach((el, i) => {
            if (t.projectDescriptions[i]) el.textContent = t.projectDescriptions[i];
        });

        selectText('#contact .section-title h2', t.contactTitle);
        selectText('#contact .section-title p', t.contactSubtitle);
        selectText('#contact .contact-header h3', t.contactHeader);
        selectText('#contact .contact-header p', t.contactHeaderText);
        const contactDetails = document.querySelectorAll('#contact .contact-text h4');
        contactDetails.forEach((el, i) => {
            if (t.contactDetails && t.contactDetails[i]) el.textContent = t.contactDetails[i];
        });

        selectText('.contact-form-title', t.formTitle);
        const formLabels = document.querySelectorAll('.form-label');
        formLabels.forEach((el, i) => {
            if (t.formLabels[i]) el.textContent = t.formLabels[i];
        });
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
            if (t.footerTitles[index]) {
                heading.textContent = t.footerTitles[index];
            }
        });
        const footerAbout = document.querySelector('.footer-col:first-child p');
        if (footerAbout) footerAbout.textContent = t.footerAbout;
        const footerQuickLinks = document.querySelectorAll('.footer-col:nth-child(2) .footer-links a');
        const footerServices = document.querySelectorAll('.footer-col:nth-child(3) .footer-links a');
        footerQuickLinks.forEach((el, i) => {
            if (t.footerQuickLinks[i]) el.textContent = t.footerQuickLinks[i];
        });
        footerServices.forEach((el, i) => {
            if (t.footerServices[i]) el.textContent = t.footerServices[i];
        });
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
