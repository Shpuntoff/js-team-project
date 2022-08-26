let overlay = document.querySelector('.overlay');

export function spinnerStart() {
  overlay.classList.add('is-open');
};

export function spinnerStop() {
  overlay.classList.remove('is-open');
};