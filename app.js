var swiper_3 = new Swiper(".mySwiper-3", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

const swiperbg = document.getElementById('swiperbg');
var swiper_2 = new Swiper(".mySwiper-2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }
});

swiper_2.on('slideChange', function () {
    swiperbg.style.backgroundImage = `url(${swiper_2.slides[swiper_2.activeIndex].querySelector('img').src})`;
    swiperbg.style.transition = 'all 0.5s'; 
});


var swiper = new Swiper(".mySwiper-1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var image = document.getElementsByClassName('parallax-img');
new simpleParallax(image, {
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)'
});