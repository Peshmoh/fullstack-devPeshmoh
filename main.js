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

// Sidebar Toggle Functions
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

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
  const sidebar = document.querySelector('.sidebar');
  const menuBtn = document.querySelector('.menu-btn');
  
  if (sidebar.classList.contains('active') && 
      !sidebar.contains(event.target) && 
      !menuBtn.contains(event.target)) {
      hideSidebar();
  }
});

// Close sidebar when clicking on a link
document.querySelectorAll('.sidebar a:not(.cancel a)').forEach(link => {
  link.addEventListener('click', hideSidebar);
});

// Scroll to Top Button
const btnScrollToTop = document.querySelector('.scrollToTop');

function toggleScrollToTopButton() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  
  if (scrollPosition > windowHeight / 2) {
      btnScrollToTop.classList.add('visible');
  } else {
      btnScrollToTop.classList.remove('visible');
  }
}

window.addEventListener('scroll', toggleScrollToTopButton);
toggleScrollToTopButton();

btnScrollToTop.addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#" or the cancel button
      if (href === '#' || this.closest('.cancel')) {
          return;
      }
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
          const navHeight = document.querySelector('nav').offsetHeight;
          const targetPosition = target.offsetTop - navHeight - 20;
          
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
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
      }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll(
      '.service, .project-card, .skill-category, .stat-card, .contact-card'
  );
  
  animateElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
  });
});

// Navbar Background on Scroll
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
      nav.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
      nav.style.padding = '0.8rem 0';
  } else {
      nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
      nav.style.padding = '1rem 0';
  }
  
  lastScroll = currentScroll;
});

// Parallax Effect for Background Shapes
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const shapes = document.querySelectorAll('.shape');
  
  shapes.forEach((shape, index) => {
      const speed = 0.5 + (index * 0.1);
      shape.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Form Submission Handler
const contactForm = document.querySelector('.form-container form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
      const submitBtn = this.querySelector('.fbtn');
      const originalContent = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
      submitBtn.disabled = true;
      
      // The form will submit normally to web3forms
      // This just provides visual feedback
      setTimeout(() => {
          submitBtn.innerHTML = '<i class="fas fa-check"></i> <span>Sent!</span>';
          
          setTimeout(() => {
              submitBtn.innerHTML = originalContent;
              submitBtn.disabled = false;
          }, 2000);
      }, 1000);
  });
}

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-15px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
  });
});

// Stagger animation for tech badges
const techBadges = document.querySelectorAll('.tech-badge');
techBadges.forEach((badge, index) => {
  badge.style.animationDelay = `${index * 0.05}s`;
});

// Service cards hover effect enhancement
document.querySelectorAll('.service').forEach(service => {
  service.addEventListener('mouseenter', function() {
      this.style.borderColor = 'var(--primary-light)';
  });
  
  service.addEventListener('mouseleave', function() {
      this.style.borderColor = 'transparent';
  });
});

// Cursor effect (optional - adds a custom cursor trail)
document.addEventListener('mousemove', (e) => {
  // Only on larger screens
  if (window.innerWidth > 768) {
      const cursor = document.createElement('div');
      cursor.style.cssText = `
          position: fixed;
          width: 4px;
          height: 4px;
          background: var(--primary);
          border-radius: 50%;
          pointer-events: none;
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          opacity: 0.5;
          z-index: 9999;
          transition: opacity 0.3s ease;
      `;
      document.body.appendChild(cursor);
      
      setTimeout(() => {
          cursor.style.opacity = '0';
      }, 100);
      
      setTimeout(() => {
          cursor.remove();
      }, 400);
  }
});

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section, div[id]');
const navLinks = document.querySelectorAll('.nav-links a, .sidebar a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 200) {
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

// Console message for developers
console.log('%c👨‍💻 Designed & Developed by Pesh Moh', 
  'color: #FF6B9D; font-size: 16px; font-weight: bold; padding: 10px;');
console.log('%c🚀 Interested in working together? Let\'s connect!', 
  'color: #6C63FF; font-size: 14px; padding: 5px;');

// Performance: Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src || img.src;
              img.classList.add('loaded');
              observer.unobserve(img);
          }
      });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
  });
}

// Add loading animation when page loads
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);
  
  if (konamiCode.join(',') === konamiPattern.join(',')) {
      document.body.style.animation = 'rainbow 2s linear infinite';
      setTimeout(() => {
          document.body.style.animation = '';
      }, 5000);
  }
});