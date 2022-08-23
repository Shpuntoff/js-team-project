const btn = document.querySelector('.btn-theme');
const body = document.querySelector('body');
const iconLight = document.querySelector('.theme-light');
const iconDark = document.querySelector('.theme-night');

// dark_mode
// light_mode

btn.addEventListener('click', onClickChangeTheme);

if (localStorage.getItem('theme') === 'dark-theme') {
  body.classList.add('dark-theme');

  iconDark.textContent = 'dark_mode';
  iconLight.textContent = '';
}
if (localStorage.getItem('theme') === 'light-theme') {
  body.classList.add('light-theme');
  iconDark.textContent = '';
  iconLight.textContent = 'light_mode';
}

function onClickChangeTheme(ev) {
  ev.preventDefault();

  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    iconDark.textContent = 'light_mode';

    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
    iconLight.textContent = '';
  } else {
    body.classList.remove('light-theme');
    iconDark.textContent = 'dark_mode';

    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
    iconLight.textContent = '';
  }
}
