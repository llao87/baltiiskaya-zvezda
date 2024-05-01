jQuery(function () {
    /**
     * Карусель в промо блоке
     */
    const roomSliders = document.querySelectorAll(".js__room-slider");
    roomSliders.forEach((roomElem) => {
        const swiper = new Swiper(roomElem, {
            loop: true,
            speed: 800,
            spaceBetween: 20,
            slidesPerView: 1,
            breakpoints: {
                // 580: {
                //     slidesPerView: 1,
                // },
            },
            navigation: {
                nextEl: roomElem.querySelector(".next"),
                prevEl: roomElem.querySelector(".prev"),
            },
        });
    });

    /**
     * слайдер СПА
     */
    const spaSwimmingPool = new Swiper(".js__pool-slider", {
        loop: true,
        speed: 800,
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
            nextEl: ".js__pool-slider .next",
            prevEl: ".js__pool-slider .prev",
        },
    });

    /**
     * Слайдер коттеджа Консульская деревня
     */
    const consulVillageSlider = new Swiper(".js__consul-village", {
        loop: true,
        speed: 800,
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
            nextEl: ".js__consul-village .next",
            prevEl: ".js__consul-village .prev",
        },
    });

    /**
     * Слайдер коттеджа "Петровский"
     */

    const cottagePetrovskii = new Swiper(".js__petrovskii", {
        loop: true,
        speed: 800,
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
            nextEl: ".js__petrovskii .next",
            prevEl: ".js__petrovskii .prev",
        },
    });

    /**
     * Слайдер ресторанов
     */
    const restElems = document.querySelectorAll(".js__rest-gallery");
    restElems.forEach((restElem) => {
        const swiper = new Swiper(restElem, {
            loop: true,
            speed: 800,
            spaceBetween: 20,
            slidesPerView: 1,
            navigation: {
                nextEl: restElem.querySelector(".next"),
                prevEl: restElem.querySelector(".prev"),
            },
        });
    });

    /**
     * Слайдер меню на странице ресторанов
     */
    const menusSlider = new Swiper(".js__menu-slider .swiper", {
        loop: true,
        speed: 800,
        slidesPerView: 3,
        navigation: {
            nextEl: ".js__menu-slider .next",
            prevEl: ".js__menu-slider .prev",
        },
    });

    /**
     * Бизнес залы
     */
    const businessHalls = document.querySelectorAll(".js__hall-gallery");
    businessHalls.forEach((hallElem) => {
        const swiper = new Swiper(hallElem, {
            loop: true,
            speed: 800,
            spaceBetween: 20,
            slidesPerView: 1,
            navigation: {
                nextEl: hallElem.querySelector(".next"),
                prevEl: hallElem.querySelector(".prev"),
            },
        });
    });

    /**
     * Пресс Холл
     */
    const pressHallSlider = new Swiper(".js__press-hall", {
        loop: true,
        speed: 800,
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
            nextEl: ".js__press-hall .next",
            prevEl: ".js__press-hall .prev",
        },
    });

    /**
     * Голубой зал
     */
    const cyanHallSlider = new Swiper(".js__hall-gallery", {
        loop: true,
        speed: 800,
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
            nextEl: ".js__hall-gallery .next",
            prevEl: ".js__hall-gallery .prev",
        },
    });

    /**
     * Интерьеры Константиновского дворца
     */
    const interiorsPalaceSlider = new Swiper(".js__interiors-slider", {
        loop: true,
        speed: 800,
        spaceBetween: 50,
        slidesPerView: 6,
        // navigation: {
        //     nextEl: ".js__interiors-slider .next",
        //     prevEl: ".js__interiors-slider .prev",
        // },
    });
});
