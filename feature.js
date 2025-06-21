const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active'); 
      hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if(window.innerWidth <= 900) {
          navLinks.classList.remove('open');
          hamburger.classList.remove('active'); 
          hamburger.setAttribute('aria-expanded', false);
          document.body.style.overflow = '';
        }
      });
    });
  }