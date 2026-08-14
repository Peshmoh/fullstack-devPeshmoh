// Typed.js Auto-typing Effect
var typed = new Typed('.auto-type', {
  strings: [
      'Laravel Expert',
      'React Developer',
      'Node.js Developer',
      'Vue.js Developer',
      'Mobile Developer'
  ],
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
  loop: true
});

// Sidebar Toggle
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close sidebar on outside click
document.addEventListener('click', function(event) {
  const sidebar = document.querySelector('.sidebar');
  const menuBtn = document.querySelector('.menu-btn');

  if (sidebar.classList.contains('active') &&
      !sidebar.contains(event.target) &&
      !menuBtn.contains(event.target)) {
      hideSidebar();
  }
});

// Close sidebar on link click
document.querySelectorAll('.sidebar a:not(.cancel a)').forEach(link => {
  link.addEventListener('click', hideSidebar);
});

// Scroll to Top Button
const btnScrollToTop = document.querySelector('.scrollToTop');

function toggleScrollToTopButton() {
  if (window.scrollY > window.innerHeight / 2) {
      btnScrollToTop.classList.add('visible');
  } else {
      btnScrollToTop.classList.remove('visible');
  }
}

window.addEventListener('scroll', toggleScrollToTopButton);
toggleScrollToTopButton();

btnScrollToTop.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      if (href === '#' || this.closest('.cancel')) {
          return;
      }

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
          const navHeight = document.querySelector('nav').offsetHeight;
          const targetPosition = target.offsetTop - navHeight;

          window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
          });
      }
  });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll(
      '.service-card, .project-row, .skill-group, .stat, .contact-item'
  );

  animateElements.forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
  });
});

// Navbar style on scroll
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
      nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
  } else {
      nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.06)';
  }
});

// Form Submission Handler
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
      const submitBtn = this.querySelector('.btn-primary');
      const originalContent = submitBtn.innerHTML;

      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
      submitBtn.disabled = true;

      setTimeout(() => {
          submitBtn.innerHTML = '<i class="fas fa-check"></i> <span>Sent!</span>';

          setTimeout(() => {
              submitBtn.innerHTML = originalContent;
              submitBtn.disabled = false;
          }, 2000);
      }, 1000);
  });
}

// Active state for navigation links based on scroll position
const sections = document.querySelectorAll('div[id], section[id]');
const navLinks = document.querySelectorAll('.nav-links a, .sidebar a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
      }
  });

  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
      }
  });
});

// Console message
console.log('%cDesigned & Developed by Pesh Moh',
  'color: #00c9a7; font-size: 14px; font-weight: bold; padding: 8px;');
console.log('%cInterested in working together? Let\'s connect!',
  'color: #9494a8; font-size: 12px; padding: 4px;');
