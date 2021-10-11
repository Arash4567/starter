/* Swiper custom config START */
var widthFirst = $(window).width();
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});
function largeMode() {
    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 4,
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
}
function meduimMode() {
    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 2,
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
}
function smallMode() {
    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    var swiper3 = new Swiper(".mySwiper3", {
        cssMode: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
}
if (widthFirst > 1200) {
    largeMode();
} else if (widthFirst > 768) {
    meduimMode();
} else {
    smallMode();
}
$(window).resize(function () {
    var width = $(window).width();
    if (width > 1200) {
        largeMode();
    } else if (width > 768) {
        meduimMode();
    } else {
        smallMode();
    }
});
/* Swiper custom config END */
