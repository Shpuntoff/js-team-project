const scrollBtn = document.querySelector('.scroll__link');
const scrollToUp = document.querySelector('.scroll__wrapper');

scrollBtn.addEventListener('click', onScrollUp);

function onScrollUp(ev) {
  ev.preventDefault();

  window.scrollTo(0, -200);
}

window.onscroll = () => {
  if (window.scrollY > 300) {
    scrollToUp.classList.remove('scroll__isHiden');
  } else if (window.scrollY < 300) {
    scrollToUp.classList.add('scroll__isHiden');
  }
};
