// ================================
// CAROUSEL
// ================================
// selects the track, all slides, dots and buttons
const track    = document.querySelector('.carousel-track');
const slides   = document.querySelectorAll('.carousel-slide');
const dots     = document.querySelectorAll('.carousel-dot');
const prevBtn  = document.querySelector('.carousel-btn--prev');
const nextBtn  = document.querySelector('.carousel-btn--next');

let current = 0;  // keeps track of which slide is showing

// moves the track left or right to show the correct slide
function goToSlide(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  current = index;
}

// next button — moves forward, loops back to 0 after last slide
nextBtn.addEventListener('click', () => {
  const next = (current + 1) % slides.length;
  goToSlide(next);
});

// prev button — moves backward, loops to last slide from first
prevBtn.addEventListener('click', () => {
  const prev = (current - 1 + slides.length) % slides.length;
  goToSlide(prev);
});

// clicking a dot jumps directly to that slide
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => goToSlide(i));
});


// ================================
// SMOOTH SCROLL
// ================================
// makes navbar links scroll smoothly to each section
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();                         // stops the default jump
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ================================
// ACTIVE NAV LINK ON SCROLL
// ================================
// highlights the correct nav link as you scroll down the page
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;   // 80px offset for sticky navbar height
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');              // adds active class to matching link
    }
  });
});