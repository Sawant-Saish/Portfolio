/* =============================================
   PORTFOLIO JS — script.js
   ============================================= */

// ---- 1. AUTO YEAR IN FOOTER ----
document.querySelectorAll('.year').forEach(el => {
  el.textContent = new Date().getFullYear();
});


// ---- 2. MOBILE HAMBURGER MENU ----
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}


// ---- 3. NAVBAR SHADOW ON SCROLL ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.style.boxShadow = window.scrollY > 20
      ? '0 4px 24px rgba(0,0,0,0.5)'
      : 'none';
  }
});


// ---- 4. SCROLL / PAGE LOAD REVEAL ----
// Elements with class "reveal" animate in when visible
const revealEls = document.querySelectorAll('.reveal');

if (revealEls.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger each card slightly
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => observer.observe(el));
}
