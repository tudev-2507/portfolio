let typedInstance = null;
export function typeAnimation() {
  if (typedInstance) {
    typedInstance.destroy();
    typedInstance = null;
  }
  const target = document.querySelector('#typed');
  if (!target) return;
  target.textContent = '';
  if (typeof window.Typed === 'function') {
    typedInstance = new window.Typed('#typed', {
      stringsElement: '#typed-strings',
      smartBackspace: true,
      typeSpeed: 35,
      backSpeed: 30,
      loop: true,
    });
  } else {
    target.innerHTML = document.querySelector('#typed-strings > p')?.innerHTML || 'Video Editor';
  }
}
