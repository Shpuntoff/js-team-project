const btn = document.querySelector('.btn-theme');
const body = document.querySelector('body');
const iconLight = document.querySelector('.theme-light');
const iconDark = document.querySelector('.theme-night');

btn.addEventListener('click', onClickChangeTheme);

if (localStorage.getItem('theme') === 'dark-theme') {
  body.classList.add('dark-theme');
  iconDark.style.display = 'block';
  iconLight.style.display = 'none';
}
if (localStorage.getItem('theme') === 'light-theme') {
  body.classList.add('light-theme');
  iconDark.style.display = 'none';
  iconLight.style.display = 'block';
}

function onClickChangeTheme(ev) {
  ev.preventDefault();

  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    iconDark.style.display = 'none';

    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
    iconLight.style.display = 'block';
  } else {
    body.classList.remove('light-theme');
    iconDark.style.display = 'block';

    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
    iconLight.style.display = 'none';
  }
}
