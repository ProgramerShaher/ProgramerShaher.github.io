/**
 * Site Features & Multilingual Content
 * This file handles the dynamic content for projects and other features
 */

const siteContent = {
    en: {
        projects: [
            {
                title: "Smart Hospital HR Management System",
                desc: "A comprehensive system for automating HR processes in hospitals, managing employees, shifts, attendance, leaves, performance evaluation, and recruitment with high efficiency. Built with ASP.NET Core 10, Angular 21, and SQL Server.",
                tags: ["ASP.NET Core 10", "Web API", "Angular 21", "TypeScript", "SQL Server", "TailwindCSS", "PrimeNg"]
            },
            {
                title: "Smart Pharmacy Management System",
                desc: "A complete pharmacy management system for medications, inventory tracking, sales, and reports to improve daily operations. Built with ASP.NET Core 10, Angular 21, TypeScript, and SQL Server.",
                tags: ["ASP.NET Core 10", "Web API", "Angular 21", "TypeScript", "SQL Server", "TailwindCSS", "PrimeNg"]
            },
            {
                title: "Mocca Coffee Online Store",
                desc: "An online coffee store that provides product browsing, cart management, and a smooth purchase journey with a modern, responsive UI. Built with PHP, HTML, CSS, JavaScript, and MySQL.",
                tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"]
            },
            {
                title: "Law Office Management Web System",
                desc: "A web platform built with ASP.NET Core Web API and Angular to manage cases, clients, legal documents, sessions, and office finances.",
                tags: ["ASP.NET Core", "Web API", "Angular", "TypeScript", "SQL Server"]
            },
            {
                title: "Law Office Management Mobile App",
                desc: "A cross-platform mobile application for managing legal cases, clients, schedules, and office workflow for law firms. Built with Flutter and Dart.",
                tags: ["Flutter", "Dart", "Mobile Development", "Cross-Platform"]
            },
            {
                title: "Shopping Online E-Commerce Store",
                desc: "A modern e-commerce store built with .NET MVC 8 and Bootstrap, featuring product management, shopping cart, and secure checkout.",
                tags: [".NET MVC 8", "Bootstrap", "C#", "SQL Server"]
            },
            {
                title: "Global News Network",
                desc: "A dynamic news network website showcasing breaking news, various categories, and multimedia content. Built with .NET MVC and Bootstrap.",
                tags: [".NET MVC", "Bootstrap", "C#", "SQL Server"]
            },
            {
                title: "School Management System",
                desc: "A comprehensive school management system including student records, teacher schedules, and academic reports. Built with .NET API and Angular.",
                tags: [".NET API", "Angular", "TailwindCSS", "PrimeNg", "TypeScript"]
            },
            {
                title: "Scientific Committee Evaluation Survey",
                desc: "A modern and functional survey platform for evaluating the scientific committee with multiple-choice questions and progress tracking. Built with React and TypeScript.",
                tags: ["React", "TypeScript", "JavaScript", "HTML/CSS"]
            }
        ],
        contact: {
            title: "Contact Me",
            subtitle: "Get in touch for collaborations or just to say hello",
            header: "Let's Talk!",
            headerDesc: "I'm always open to discussing new projects and opportunities",
            location: "Location",
            locationVal: "Sanaa, Yemen",
            email: "Email",
            phone: "Phone",
            formTitle: "Send Me a Message",
            formName: "Full Name",
            formEmail: "Email",
            formSubject: "Subject",
            formMessage: "Message",
            formSubmit: "Send Message"
        }
    },
    ar: {
        projects: [
            {
                title: "نظام إدارة الموارد البشرية الذكي للمستشفيات",
                desc: "نظام متكامل لأتمتة عمليات الموارد البشرية في المستشفيات وإدارة الموظفين والورديات والحضور والإجازات وتقييم الأداء والتوظيف بكفاءة عالية. مبني بـ ASP.NET Core 10 و Angular 21 و SQL Server.",
                tags: ["ASP.NET Core 10", "Web API", "Angular 21", "TypeScript", "SQL Server", "TailwindCSS", "PrimeNg"]
            },
            {
                title: "نظام إدارة الصيدلية الذكي",
                desc: "نظام متكامل لإدارة الصيدلية يشمل الأدوية والمخزون والمبيعات والتقارير لتحسين كفاءة العمل اليومي. مبني بـ ASP.NET Core 10 و Angular 21 و TypeScript و SQL Server.",
                tags: ["ASP.NET Core 10", "Web API", "Angular 21", "TypeScript", "SQL Server", "TailwindCSS", "PrimeNg"]
            },
            {
                title: "متجر موكا للقهوة عبر الإنترنت",
                desc: "متجر إلكتروني للقهوة يوفر عرض المنتجات وإدارة السلة وتجربة شراء سلسة بواجهة حديثة ومتجاوبة. مبني بـ PHP و HTML و CSS و JavaScript و MySQL.",
                tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"]
            },
            {
                title: "نظام ويب لإدارة مكاتب المحاماة",
                desc: "منصة ويب متطورة مبنية بـ ASP.NET Core Web API و Angular لإدارة احترافية لمكاتب المحاماة مع إدارة القضايا والعملاء والمستندات والجلسات والجانب المالي.",
                tags: ["ASP.NET Core", "Web API", "Angular", "TypeScript", "SQL Server"]
            },
            {
                title: "تطبيق موبايل لإدارة مكاتب المحاماة",
                desc: "تطبيق موبايل احترافي مبني بـ Flutter لإدارة شاملة لمكاتب المحاماة مع متابعة القضايا والعملاء والمواعيد والجلسات والوثائق القانونية.",
                tags: ["Flutter", "Dart", "تطوير الموبايل", "متعدد المنصات"]
            },
            {
                title: "متجر التسوق الإلكتروني",
                desc: "متجر تسوق إلكتروني حديث مبني بـ .NET MVC 8 و Bootstrap يوفر إدارة المنتجات وسلة التسوق والدفع الآمن.",
                tags: [".NET MVC 8", "Bootstrap", "C#", "SQL Server"]
            },
            {
                title: "شبكة الأخبار العالمية",
                desc: "موقع شبكة أخبار ديناميكي يعرض الأخبار العاجلة والأقسام المختلفة والمحتوى المتعدد الوسائط. مبني بـ .NET MVC و Bootstrap.",
                tags: [".NET MVC", "Bootstrap", "C#", "SQL Server"]
            },
            {
                title: "نظام إدارة المدارس",
                desc: "نظام شامل لإدارة المدارس يتضمن سجلات الطلاب وجداول المعلمين والتقارير الأكاديمية. مبني بـ .NET API و Angular و TailwindCSS و PrimeNg.",
                tags: [".NET API", "Angular", "TailwindCSS", "PrimeNg", "TypeScript"]
            },
            {
                title: "استبيان تقييم اللجنة العلمية",
                desc: "منصة استبيان حديثة وظيفية لتقييم اللجنة العلمية مع أسئلة متعددة الخيارات وتتبع التقدم. مبني بـ React و TypeScript.",
                tags: ["React", "TypeScript", "JavaScript", "HTML/CSS"]
            }
        ],
        contact: {
            title: "تواصل معي",
            subtitle: "تواصل معي للتعاون أو لمجرد السلام",
            header: "لنتحدث!",
            headerDesc: "أنا دائمًا منفتح لمناقشة المشاريع الجديدة والفرص",
            location: "الموقع",
            locationVal: "صنعاء، اليمن",
            email: "البريد الإلكتروني",
            phone: "الهاتف",
            formTitle: "أرسل لي رسالة",
            formName: "الاسم الكامل",
            formEmail: "البريد الإلكتروني",
            formSubject: "الموضوع",
            formMessage: "الرسالة",
            formSubmit: "إرسال الرسالة"
        }
    }
};

/**
 * Update project content based on language
 */
function updateProjectsContent(lang) {
    const projectCards = document.querySelectorAll('.projects-grid .project-card');
    const projectsData = siteContent[lang].projects;
    
    projectCards.forEach((card, index) => {
        if (projectsData[index]) {
            const title = card.querySelector('.project-title');
            const desc = card.querySelector('.project-desc');
            const tagsContainer = card.querySelector('.project-tags');
            
            if (title) title.textContent = projectsData[index].title;
            if (desc) desc.textContent = projectsData[index].desc;
            
            if (tagsContainer) {
                tagsContainer.innerHTML = '';
                projectsData[index].tags.forEach(tag => {
                    const span = document.createElement('span');
                    span.className = 'project-tag';
                    span.textContent = tag;
                    tagsContainer.appendChild(span);
                });
            }
        }
    });
}

/**
 * Update contact section content based on language
 */
function updateContactContent(lang) {
    const contactSection = document.querySelector('.contact');
    if (!contactSection) return;
    
    const data = siteContent[lang].contact;
    
    const title = contactSection.querySelector('.section-title h2');
    const subtitle = contactSection.querySelector('.section-title p');
    const header = contactSection.querySelector('.contact-header h3');
    const headerDesc = contactSection.querySelector('.contact-header p');
    const formTitle = contactSection.querySelector('.contact-form-title');
    const submitBtn = contactSection.querySelector('.form-submit-btn span');
    
    if (title) title.textContent = data.title;
    if (subtitle) subtitle.textContent = data.subtitle;
    if (header) header.textContent = data.header;
    if (headerDesc) headerDesc.textContent = data.headerDesc;
    if (formTitle) formTitle.textContent = data.formTitle;
    if (submitBtn) submitBtn.textContent = data.formSubmit;
    
    // Update labels and placeholders
    const labels = contactSection.querySelectorAll('.form-label');
    const inputs = contactSection.querySelectorAll('.form-input');
    
    labels.forEach(label => {
        const forAttr = label.getAttribute('for');
        if (forAttr === 'fullName' || forAttr === 'name') label.textContent = data.formName;
        if (forAttr === 'email') label.textContent = data.formEmail;
        if (forAttr === 'subject') label.textContent = data.formSubject;
        if (forAttr === 'message') label.textContent = data.formMessage;
    });
    
    inputs.forEach(input => {
        const id = input.getAttribute('id');
        const name = input.getAttribute('name');
        if (id === 'fullName' || name === 'name') input.placeholder = lang === 'ar' ? 'اكتب اسمك الكامل' : 'Your full name';
        if (id === 'email') input.placeholder = lang === 'ar' ? 'اكتب بريدك الإلكتروني' : 'Your email address';
        if (id === 'subject') input.placeholder = lang === 'ar' ? 'موضوع الرسالة' : 'Message subject';
        if (id === 'message') input.placeholder = lang === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message...';
    });
    
    // Update contact details
    const contactDetails = contactSection.querySelectorAll('.contact-details li');
    contactDetails.forEach(li => {
        const h4 = li.querySelector('h4');
        if (h4) {
            const text = h4.textContent.trim();
            if (text === 'الموقع' || text === 'Location') h4.textContent = data.location;
            if (text === 'البريد الإلكتروني' || text === 'Email') h4.textContent = data.email;
            if (text === 'الهاتف' || text === 'Phone') h4.textContent = data.phone;
        }
    });
}

// Listen for language change
document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            const lang = e.target.value;
            updateProjectsContent(lang);
            updateContactContent(lang);
        });
        
        // Initial update
        updateProjectsContent(languageSelect.value);
        updateContactContent(languageSelect.value);
    }
});
