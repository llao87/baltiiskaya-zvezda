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
        slidesPerView: 1,
        navigation: {
            nextEl: ".js__menu-slider .next",
            prevEl: ".js__menu-slider .prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
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
        allowTouchMove: false,
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
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 6,
            },
        },
    });

    /**
     * Комнаты на главной
     */
    const homeRoomsSlider = new Swiper(".js__rooms-slider", {
        loop: true,
        speed: 800,
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
            nextEl: ".js__rooms-slider .controls__rooms .next",
            prevEl: ".js__rooms-slider .controls__rooms .prev",
        },
    });

    const homeRoomsGallery = new Swiper(".js__room-photo", {
        loop: true,
        nested: true,
        speed: 800,
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
            nextEl: ".js__room-photo .controls__gallery .next",
            prevEl: ".js__room-photo .controls__gallery .prev",
        },
    });

    const homeHallsSlider = new Swiper(".js__halls-home-slider", {
        loop: false,
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".js__halls-home-slider > .controls__gallery .next",
            prevEl: ".js__halls-home-slider > .controls__gallery .prev",
        },
        breakpoints: {
            580: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 28,
            },
        },
    });

    const homeActionsSlider = new Swiper(".js__home-actions-slider", {
        loop: true,
        speed: 800,
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
            nextEl: ".js__home-actions-slider > .controls .next",
            prevEl: ".js__home-actions-slider > .controls .prev",
        },
    });
});
