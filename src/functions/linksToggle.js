const box = document.querySelector('#nav-links')
const burg = document.querySelector('#burg')

burg.addEventListener('click', () => {
    if (box.classList.contains('hidden')) {
        box.classList.remove('hidden')
    } else {
        box.classList.add('hidden')
    }
})