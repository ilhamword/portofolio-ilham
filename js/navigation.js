// ===== Navigation =====

export function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.navbar__link');

  if (!navbar || !navToggle || !navLinks) return;

  // --- Scroll: add shadow to navbar ---
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }

    // Update active link based on scroll position
    updateActiveLink();
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Run once on init

  // --- Mobile menu toggle ---
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('navbar__links--open');
    navToggle.classList.toggle('navbar__toggle--active');
    navToggle.setAttribute('aria-expanded', isOpen);

    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // --- Close mobile menu when clicking a link ---
  navLinkItems.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('navbar__links--open');
      navToggle.classList.remove('navbar__toggle--active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // --- Close mobile menu on resize to desktop ---
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
      navLinks.classList.remove('navbar__links--open');
      navToggle.classList.remove('navbar__toggle--active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // --- Active link tracking ---
  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinkItems.forEach((link) => {
          link.classList.remove('navbar__link--active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('navbar__link--active');
          }
        });
      }
    });
  }
}
