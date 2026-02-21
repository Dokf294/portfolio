export function initScrolling() {
  const header = document.querySelector('.header');

  if (!header) return;

  function handleScroll() {
    if (window.scrollY > 10) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);

  handleScroll();
}