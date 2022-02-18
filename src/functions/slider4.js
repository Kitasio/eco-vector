let carouselSlide4 = document.querySelector('.carousel-slide4')
let carouselItems4 = document.querySelectorAll('.carousel-slide4 .item4')

const prevBtn4 = document.querySelector('#prev4')
const nextBtn4 = document.querySelector('#next4')

let counter4 = 0;
const size4 = carouselItems4[0].clientWidth + 48;

carouselSlide4.style.transform = "translateX(" + (-size4 * counter4) + "px)";

nextBtn4.addEventListener('click', () => {
    if (window.innerWidth > 1024 && counter4 !== carouselItems4.length - 4) {
        carouselSlide4.style.transition = "transform 0.4s ease-in-out"
        counter4 ++;
        carouselSlide4.style.transform = "translateX(" + (-size4 * counter4) + "px)";
    } else if (window.innerWidth < 1024 && counter4 !== carouselItems4.length - 3) {
        carouselSlide4.style.transition = "transform 0.4s ease-in-out"
        counter4 ++;
        carouselSlide4.style.transform = "translateX(" + (-size4 * counter4) + "px)";
    }
})
prevBtn4.addEventListener('click', () => {
    if (counter4 !== 0) {
        carouselSlide4.style.transition = "transform 0.4s ease-in-out"
        counter4 --;
        carouselSlide4.style.transform = "translateX(" + (-size4 * counter4) + "px)";
    }
})
