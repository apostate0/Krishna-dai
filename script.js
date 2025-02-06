document.addEventListener('DOMContentLoaded', function() {
    // Add transition overlay to the body
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay);

    // Add click event listeners to all navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (!this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                overlay.style.transform = 'scaleY(1)';
                
                setTimeout(() => {
                    window.location.href = this.getAttribute('href');
                }, 500);
            }
        });
    });

    // Initial page load animation
    overlay.style.transform = 'scaleY(1)';
    setTimeout(() => {
        overlay.style.transform = 'scaleY(0)';
    }, 100);
}); 