let overlay = document.querySelector('.overlay')

window.addEventListener('load', () => {
overlay.classList.add('is-open');
setTimeout(()=>{
    overlay.remove()
}, 600)
})