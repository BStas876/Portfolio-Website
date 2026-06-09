// === CAROUSEL ===
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
const prevBtn = document.querySelector('.carousel-btn--prev');
const nextBtn = document.querySelector('.carousel-btn--next');

let current = 0;

// moves the track to show the correct slide
function goToSlide(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  current = index;
}

nextBtn.addEventListener('click', () => {
  const next = (current + 1) % slides.length;  // loops back to 0 after last
  goToSlide(next);
});

prevBtn.addEventListener('click', () => {
  const prev = (current - 1 + slides.length) % slides.length;  // loops to last from first
  goToSlide(prev);
});

// clicking a dot jumps to that slide
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => goToSlide(i));
});

