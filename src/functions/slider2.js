let carouselSlide = document.querySelector('.carousel-slide2')
let carouselItems = document.querySelectorAll('.carousel-slide2 .item2')

const prevBtn = document.querySelector('#prev2')
const nextBtn = document.querySelector('#next2')

let counter = 0;
const size = carouselItems[0].clientWidth + 48;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

nextBtn.addEventListener('click', () => {
    if (window.innerWidth > 1024 && counter !== carouselItems.length - 4) {
        carouselSlide.style.transition = "transform 0.4s ease-in-out"
        counter ++;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    } else if (window.innerWidth < 1024 && counter !== carouselItems.length - 3) {
        carouselSlide.style.transition = "transform 0.4s ease-in-out"
        counter ++;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
})
prevBtn.addEventListener('click', () => {
    if (counter !== 0) {
        carouselSlide.style.transition = "transform 0.4s ease-in-out"
        counter --;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
})
