const btn = document.querySelector('.btn-theme');
const body = document.querySelector('body');
const iconLight = document.querySelector('.theme-light');
const iconDark = document.querySelector('.theme-night');


btn.addEventListener('click', onClickChangeTheme);

if (localStorage.getItem('theme') === 'dark-theme') {
  body.classList.add('dark-theme');
};

if (localStorage.getItem('theme') === 'light-theme') {
  body.classList.add('light-theme');
};

function onClickChangeTheme(ev) {
  ev.preventDefault();

  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');

    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');

  } else {
    body.classList.remove('light-theme');

    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
    
  };
};
