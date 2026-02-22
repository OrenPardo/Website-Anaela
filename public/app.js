// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  // Close menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Hide header on scroll down, show on scroll up
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > lastScroll && current > 80) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  lastScroll = current;
}, { passive: true });

// Contact form placeholder handler
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! This form is not yet connected to a backend.');
    form.reset();
  });
}
