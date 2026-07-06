document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navLinks.classList.remove('active'));
        });
    }

    let lastScroll = 0;
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        const current = window.pageYOffset;
        if (header) {
            header.style.transform = (current > lastScroll && current > 120) ? 'translateY(-100%)' : 'translateY(0)';
        }
        lastScroll = current;
    });
});
