// Add interactivity to the navigation menu (e.g., change link colors on hover)
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#ddd';
    });

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '';
    });
});
