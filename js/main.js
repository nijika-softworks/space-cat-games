// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add active class to current navigation item
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.topnav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Lazy loading for images (basic implementation)
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    
    // Responsive navigation toggle (for mobile)
    const createMobileNavToggle = () => {
        if (window.innerWidth <= 768) {
            // Only create the toggle if it doesn't exist and we're on mobile
            if (!document.querySelector('.nav-toggle')) {
                const nav = document.querySelector('.topnav');
                const toggle = document.createElement('button');
                toggle.classList.add('nav-toggle');
                toggle.innerHTML = '☰';
                toggle.style.cssText = `
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: none;
                    border: none;
                    color: white;
                    font-size: 24px;
                    cursor: pointer;
                    z-index: 101;
                    display: none;
                `;
                
                toggle.addEventListener('click', () => {
                    nav.classList.toggle('nav-open');
                });
                
                document.body.appendChild(toggle);
            }
        }
    };
    
    // Check if we need to create a responsive toggle
    createMobileNavToggle();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        createMobileNavToggle();
    });
});
