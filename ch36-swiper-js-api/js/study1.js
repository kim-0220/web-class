document.addEventListener("DOMContentLoaded",function(){
    const swiper = new Swiper('.station', {
    // Optional parameters(선택적인 매개변수)
        direction: 'vertical',
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 20,
        speed: 1000,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    const swiper2 = new Swiper('.station2', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 40,
        speed: 300,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
})