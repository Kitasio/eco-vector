let carouselSlide3 = document.querySelector('.carousel-slide3')
let carouselItems3 = document.querySelectorAll('.carousel-slide3 .item3')

const prevBtn3 = document.querySelector('#prev3')
const nextBtn3 = document.querySelector('#next3')

let counter3 = 0;
const size3 = carouselItems3[0].clientWidth + 48;

carouselSlide3.style.transform = "translateX(" + (-size3 * counter3) + "px)";

nextBtn3.addEventListener('click', () => {
    if (window.innerWidth > 1024 && counter3 !== carouselItems3.length - 4) {
        carouselSlide3.style.transition = "transform 0.4s ease-in-out"
        counter3 ++;
        carouselSlide3.style.transform = "translateX(" + (-size3 * counter3) + "px)";
    } else if (window.innerWidth < 1024 && counter3 !== carouselItems3.length - 3) {
        carouselSlide3.style.transition = "transform 0.4s ease-in-out"
        counter3 ++;
        carouselSlide3.style.transform = "translateX(" + (-size3 * counter3) + "px)";
    }
})
prevBtn3.addEventListener('click', () => {
    if (counter3 !== 0) {
        carouselSlide3.style.transition = "transform 0.4s ease-in-out"
        counter3 --;
        carouselSlide3.style.transform = "translateX(" + (-size3 * counter3) + "px)";
    }
})
