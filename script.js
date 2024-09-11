document.addEventListener('DOMContentLoaded', () => {
    const applyNowButton = document.getElementById('applyNow');
    const contactForm = document.getElementById('contactForm');

    applyNowButton.addEventListener('click', () => {
        alert('Thank you for your interest in applying to sabahttin zaim University! Our application system will open soon.');
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for contacting us. We will get back to you soon!');
        contactForm.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
