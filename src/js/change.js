export function initChange() {
  const batteries = document.querySelectorAll('.battarey');
  if (!batteries.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-charging');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  batteries.forEach((b) => io.observe(b));
}