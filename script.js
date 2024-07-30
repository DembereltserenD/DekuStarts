document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Animated countdown for upcoming events
    const events = document.querySelectorAll('.event');
    events.forEach(event => {
        const dateElement = event.querySelector('.event-date');
        const eventDate = new Date(dateElement.textContent);
        
        function updateCountdown() {
            const now = new Date();
            const difference = eventDate - now;
            
            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                
                dateElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            } else {
                dateElement.textContent = 'Event has started!';
            }
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const config = {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0
    };

    let observer = new IntersectionObserver(function(entries, self) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                preloadImage(entry.target);
                self.unobserve(entry.target);
            }
        });
    }, config);

    images.forEach(image => {
        observer.observe(image);
    });

    function preloadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) { return; }
        img.src = src;
    }

    // Mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.textContent = '☰';
    menuToggle.id = 'menu-toggle';
    document.querySelector('header').appendChild(menuToggle);

    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.textContent = nav.classList.contains('active') ? '✕' : '☰';
    });
});
