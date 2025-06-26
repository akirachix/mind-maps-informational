// Hamburger menu toggle for responsive navigation

// document.addEventListener("DOMContentLoaded", function () {
//   const hamburger = document.querySelector('.hamburger');
//   const navLinks = document.querySelector('.nav-links');

//   if (hamburger && navLinks) {
//     hamburger.addEventListener('click', function () {
//       navLinks.classList.toggle('show');
//     });

//     // Optional: Close nav when clicking outside or on a link (for better UX)
//     document.addEventListener('click', function (e) {
//       if (
//         !navLinks.contains(e.target) &&
//         !hamburger.contains(e.target) &&
//         navLinks.classList.contains('show')
//       ) {
//         navLinks.classList.remove('show');
//       }
//     });

//     // Optional: Close nav on link click (for one-page sites)
//     navLinks.querySelectorAll('a').forEach(function(link) {
//       link.addEventListener('click', function () {
//         navLinks.classList.remove('show');
//       });
//     });
//   }
// });


// document.addEventListener("DOMContentLoaded", function () {
//   const h = document.querySelector('.hamburger'), n = document.querySelector('.nav-links');
//   if (!h || !n) return;
//   const x = Object.assign(document.createElement('span'), { innerHTML: '&times;' });
//   Object.assign(x.style, { display: 'none', fontSize: '2rem', cursor: 'pointer', position: 'absolute', right: '10px', top: '8px' });
//   h.style.position = 'relative'; h.appendChild(x);
//   function t(s) {
//     n.classList.toggle('show', s);
//     [...h.children].forEach(c => c !== x && (c.style.display = s ? 'none' : ''));
//     x.style.display = s ? 'block' : 'none';
//   }
//   h.addEventListener('click', e => { if (!n.classList.contains('show')) t(1); });
//   x.addEventListener('click', e => { e.stopPropagation(); t(0); });
//   document.addEventListener('click', e => { if (!n.contains(e.target) && !h.contains(e.target) && n.classList.contains('show')) t(0); });
//   n.querySelectorAll('a').forEach(l => l.addEventListener('click', () => t(0)));
// });

document.addEventListener("DOMContentLoaded", function () {
  const h = document.querySelector('.hamburger'), n = document.querySelector('.nav-links');
  if (!h || !n) return;
  // Assume hamburger icon is first child
  const hamburgerIcon = h.firstElementChild;
  // Create the X icon
  const x = Object.assign(document.createElement('span'), { innerHTML: '&times;' });
  Object.assign(x.style, { display: 'none', fontSize: '2rem', cursor: 'pointer', position: 'absolute', right: '10px', top: '8px' });
  h.appendChild(x);

  function toggleMenu(open) {
    n.classList.toggle('show', open);
    if (open) {
      if (hamburgerIcon) hamburgerIcon.style.display = 'none'; // hide hamburger
      x.style.display = 'block'; // show X
    } else {
      if (hamburgerIcon) hamburgerIcon.style.display = ''; // show hamburger
      x.style.display = 'none'; // hide X
    }
  }

  h.addEventListener('click', function() {
    if (!n.classList.contains('show')) toggleMenu(true);
  });

  x.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu(false);
  });

  document.addEventListener('click', function(e) {
    if (!n.contains(e.target) && !h.contains(e.target) && n.classList.contains('show')) toggleMenu(false);
  });

  n.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() { toggleMenu(false); });
  });
});

