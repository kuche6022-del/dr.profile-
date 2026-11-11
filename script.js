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


/* Accessible horizontal gallery controls */
const galleryTrack = document.getElementById('moments-track');
if (galleryTrack) {
  const galleryCards = [...galleryTrack.querySelectorAll('.gallery-card')];
  const progress = document.querySelector('.gallery-progress span');
  const count = document.querySelector('.gallery-count');
  const updateGallery = () => {
    const maxScroll = galleryTrack.scrollWidth - galleryTrack.clientWidth;
    const ratio = maxScroll > 0 ? galleryTrack.scrollLeft / maxScroll : 0;
    if (progress) progress.style.width = `${Math.max(33.333, (ratio * 66.667) + 33.333)}%`;
    if (count) {
      const active = Math.min(galleryCards.length, Math.max(1, Math.round(ratio * (galleryCards.length - 1)) + 1));
      count.textContent = `${String(active).padStart(2, '0')} — ${String(galleryCards.length).padStart(2, '0')}`;
    }
  };
  document.querySelector('[data-gallery-prev]')?.addEventListener('click', () => {
    galleryTrack.scrollBy({ left: -galleryTrack.clientWidth * 0.82, behavior: 'smooth' });
  });
  document.querySelector('[data-gallery-next]')?.addEventListener('click', () => {
    galleryTrack.scrollBy({ left: galleryTrack.clientWidth * 0.82, behavior: 'smooth' });
  });
  galleryTrack.addEventListener('scroll', updateGallery, { passive: true });
  updateGallery();
}
