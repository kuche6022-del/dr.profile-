const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.setAttribute('aria-controls', 'primary-navigation');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// Close the mobile menu with Escape for keyboard users.
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    menuButton.focus();
  }
});


/* Automatic fading gallery with manual controls, swipe and accessibility support */
const galleryTrack = document.getElementById('moments-track');
if (galleryTrack) {
  const galleryCards = [...galleryTrack.querySelectorAll('.gallery-card')];
  const progress = document.querySelector('.gallery-progress span');
  const count = document.querySelector('.gallery-count');
  const previous = document.querySelector('[data-gallery-prev]');
  const next = document.querySelector('[data-gallery-next]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let activeIndex = 0;
  let timer = null;
  let touchStartX = 0;

  const showSlide = (index) => {
    activeIndex = (index + galleryCards.length) % galleryCards.length;
    galleryCards.forEach((card, i) => {
      const active = i === activeIndex;
      card.classList.toggle('is-active', active);
      card.setAttribute('aria-hidden', String(!active));
      card.inert = !active;
    });
    if (progress) progress.style.width = `${((activeIndex + 1) / galleryCards.length) * 100}%`;
    if (count) count.textContent = `${String(activeIndex + 1).padStart(2, '0')} — ${String(galleryCards.length).padStart(2, '0')}`;
  };

  const stopAutoplay = () => {
    if (timer) window.clearInterval(timer);
    timer = null;
  };
  const startAutoplay = () => {
    stopAutoplay();
    if (reducedMotion || galleryCards.length < 2 || document.hidden) return;
    timer = window.setInterval(() => showSlide(activeIndex + 1), 5600);
  };
  const goNext = () => { showSlide(activeIndex + 1); startAutoplay(); };
  const goPrevious = () => { showSlide(activeIndex - 1); startAutoplay(); };

  next?.addEventListener('click', goNext);
  previous?.addEventListener('click', goPrevious);
  galleryTrack.addEventListener('mouseenter', stopAutoplay);
  galleryTrack.addEventListener('mouseleave', startAutoplay);
  galleryTrack.addEventListener('focusin', stopAutoplay);
  galleryTrack.addEventListener('focusout', startAutoplay);
  galleryTrack.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); goNext(); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); goPrevious(); }
  });
  galleryTrack.addEventListener('touchstart', event => {
    touchStartX = event.changedTouches[0].clientX;
    stopAutoplay();
  }, { passive: true });
  galleryTrack.addEventListener('touchend', event => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 45) distance < 0 ? goNext() : goPrevious();
    else startAutoplay();
  }, { passive: true });
  document.addEventListener('visibilitychange', () => document.hidden ? stopAutoplay() : startAutoplay());

  showSlide(0);
  startAutoplay();
}
