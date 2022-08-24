let overlay = document.querySelector('.overlay');

export function spinner() {
  overlay.classList.add('is-open');
  setTimeout(() => {
    overlay.classList.remove('is-open');
  }, 600);
};