// scripts.js

// Handle dropdown visibility
document.addEventListener('click', function(event) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const dropdown = item.querySelector('.dropdown');
        if (!item.contains(event.target)) {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'block';
        }
    });
});

// Handle footer visibility on scroll
document.addEventListener('scroll', function() {
    const footer = document.querySelector('.site-footer');
    const scrollPosition = window.innerHeight + window.scrollY;
    const bodyHeight = document.body.offsetHeight;

    if (scrollPosition >= bodyHeight) {
        footer.style.display = 'block'; // Show footer
    } else {
        footer.style.display = 'none'; // Hide footer
    }
});
