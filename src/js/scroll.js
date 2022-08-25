const scrollBtn = document.querySelector('.scroll__link');
const scrollToUp = document.querySelector('.scroll__wrapper');
const body = document.querySelector('body');

scrollBtn.addEventListener('click', onScrollUp);

export function onScrollUp(ev) {
  ev.preventDefault();

  body.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

window.onscroll = () => {
  if (window.scrollY > 300) {
    scrollToUp.classList.remove('scroll__isHiden');
  } else {
    scrollToUp.classList.add('scroll__isHiden');
  };
};
