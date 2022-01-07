const services = document.querySelectorAll('.service')
const btns = document.querySelectorAll('.service-btn')

services[0].classList.remove('hidden')
btns[0].classList.remove('opacity-60')

for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    btn.addEventListener('click', () => {
        for (let i = 0; i < services.length; i++) {
            const serv = services[i];
            serv.classList.add('hidden')
        }
        for (let i = 0; i < btns.length; i++) {
            const btn = btns[i];
            btn.classList.add('opacity-60')
        }
        services[i].classList.remove('hidden')
        btn.classList.remove('opacity-60')
    })
    
}