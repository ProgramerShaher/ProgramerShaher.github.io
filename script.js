 
        document.addEventListener('DOMContentLoaded', function() {
           // Mobile menu toggle
           const menuBtn = document.querySelector('.menu-btn');
           const navLinks = document.querySelector('.nav-links');
           const header = document.querySelector('header');
           
            menuBtn.addEventListener('click', function() {
               navLinks.classList.toggle('active');
               menuBtn.querySelector('i').classList.toggle('fa-times');
           });
           
           // Header scroll effect
            window.addEventListener('scroll', function() {
               if (window.scrollY > 100) {
                   header.classList.add('scrolled');
               } else {
                   header.classList.remove('scrolled');
               }
           });
           
           // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
               anchor.addEventListener('click', function(e) {
                   e.preventDefault();
                   const targetId = this.getAttribute('href');
                   if (targetId === '#') return;
                   
                   const targetElement = document.querySelector(targetId);
                   if (targetElement) {
                       // Close mobile menu if open
                       navLinks.classList.remove('active');
                       menuBtn.querySelector('i').classList.remove('fa-times');
                       
                       window.scrollTo({
                           top: targetElement.offsetTop - 100,
                           behavior: 'smooth'
                       });
                   }
               });
           });
           

           // Form submission
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
               contactForm.addEventListener('submit', function(e) {
                   e.preventDefault();
                   
                   // Simulate form submission
                   alert('Thank you for your message! I will get back to you soon.');
                   contactForm.reset();
               });
           }
        });
              document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Filter skills
            skillCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});