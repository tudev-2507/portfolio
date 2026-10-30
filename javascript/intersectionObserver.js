const ids = ['hero', 'editing', 'video-work', 'projects', 'skills', 'contact'];
export function intersectionObserver() {
  const targets = ids.map(id => document.getElementById(id)).filter(Boolean);
  const links = document.querySelectorAll('.nav__desktop-links a[href^="#"], .sidebar-mobile a[href^="#"]');
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const id = entry.target.id;
      links.forEach(link => link.classList.toggle('active-link', link.getAttribute('href') === '#' + id));
    }
  }, {rootMargin: '-10% 0px -65% 0px', threshold: 0});
  targets.forEach(el => observer.observe(el));
}
