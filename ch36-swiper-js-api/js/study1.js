document.addEventListener("DOMContentLoaded",function(){

    const station1 = new Swiper('.station', {
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

    const station2 = new Swiper('.station2', {
        direction: 'horizontal',
        loop: true,
        speed: 300,
        // 슬라이드가 실제로 움직이는 속도 0.3초(슬라이드가 움직이는 시간)
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            // 슬라이드가 자동으로 넘어가기전에 기다리는 시간 2.5초(2.5초 멈춰있다가 다음으로 넘어감)
            disableOnInteraction: false,
            // 사용자가 슬라이드를 드래그하거나 화살표를 누르면 autoplay가 멈추는 기능(값이 true일때 - 기본값)
            // 위의 경우 false이기 때문에 사용자가 건드려도 자동 슬라이드가 유지됨
        },
    });

})