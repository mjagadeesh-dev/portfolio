// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Typing Animation
    const typingText = document.getElementById('typing-text');
    const roles = ['Web Developer', 'Designer', 'Tech Enthusiast'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        } else {
            typingText.textContent = currentRole.substring(0, charIndex++);
            if (charIndex > currentRole.length) {
                isDeleting = true;
                setTimeout(type, 1000); // Pause before deleting
                return;
            }
        }
        setTimeout(type, isDeleting ? 50 : 100);
    }
    type();

    // Contact Form Submission (Formspree Integration)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
            const response = await fetch('https://formspree.io/f/xblgjpbv', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                alert('Thank you for your message! I’ll get back to you soon.');
                e.target.reset();
            } else {
                alert('There was an error submitting your message. Please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please try again later.');
        }
    });

    // Education Timeline Animation
    const items = document.querySelectorAll(".timeline-item");

    function checkVisibility() {
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                item.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
