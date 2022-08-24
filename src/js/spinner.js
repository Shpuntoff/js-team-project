let overlay = document.querySelector('.overlay');


export function spinner() {
    window.addEventListener('load', () => {
        overlay.classList.add('is-open');
        setTimeout(() => {
          overlay.remove();
        }, 600);
      });  
}

