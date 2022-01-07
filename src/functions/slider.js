let carouselSlide2 = document.querySelector('.carousel-slide')
let carouselItems2 = document.querySelectorAll('.carousel-slide .item')

const prevBtn2 = document.querySelector('#prev')
const nextBtn2 = document.querySelector('#next')

let counter2 = 0;
const size2 = carouselItems2[0].clientWidth + 48;

carouselSlide2.style.transform = "translateX(" + (-size2 * counter2) + "px)";

nextBtn2.addEventListener('click', () => {
    if (window.innerWidth > 1024 && counter2 !== carouselItems2.length - 4) {
        carouselSlide2.style.transition = "transform 0.4s ease-in-out"
        counter2 ++;
        carouselSlide2.style.transform = "translateX(" + (-size2 * counter2) + "px)";
    } else if (window.innerWidth < 1024 && counter2 !== carouselItems2.length - 3) {
        carouselSlide2.style.transition = "transform 0.4s ease-in-out"
        counter2 ++;
        carouselSlide2.style.transform = "translateX(" + (-size2 * counter2) + "px)";
    }
})
prevBtn2.addEventListener('click', () => {
    if (counter2 !== 0) {
        carouselSlide2.style.transition = "transform 0.4s ease-in-out"
        counter2 --;
        carouselSlide2.style.transform = "translateX(" + (-size2 * counter2) + "px)";
    }
})
