jQuery(function () {
    /*
    const partnersCarousel = new Swiper(".partners-slider", {
        loop: true,
        slidesPerView: 5,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        breakpoints: {
            // 580: {
            //     slidesPerView: 1,
            // },
            // 768: {
            //     slidesPerView: 2,
            // },
            // 991: {
            //     slidesPerView: 3,
            // },
            // 1180: {
            //     slidesPerView: 4,
            // },
            // 1340: {
            //     slidesPerView: 5,
            // },
        },
    });

    const projectsCarousel = new Swiper(".js__projects-slider", {
        slidesPerView: 1,
        navigation: {
            nextEl: ".projects .container .controls .next-project",
            prevEl: ".projects .container .controls .prev-project",
        },
    });

    // прокрутка страницы
    jQuery(".nav-link").on("click", function (e) {
        e.preventDefault();
        let href = jQuery(this).attr("href");

        console.log(document.location.pathname);

        if (document.location.pathname == "/") {
            if (href == "/") {
                href = "#promo";
            }

            if (href.includes("#")) {
                jQuery(this)
                    .parents(".container")
                    .find(".active")
                    .removeClass("active");

                jQuery("html, body").animate(
                    {
                        scrollTop: jQuery(href).stop().offset().top,
                    },
                    {
                        duration: 900,
                        easing: "linear",
                    }
                );
            } else {
                document.location.href = href;
            }
        } else {
            href = href.includes("#") ? "/" + href : href;
            document.location.href = href;
        }
    });
    */

    // Карусель в промо блоке
    const roomSlider = new Swiper(".js__room-slider", {
        loop: true,
        speed: 800,
        spaceBetween: 15,
        slidesPerView: 1,
        breakpoints: {
            // 580: {
            //     slidesPerView: 1,
            // },
            // 768: {
            //     slidesPerView: 2,
            // },
            // 991: {
            //     slidesPerView: 3,
            // },
            // 1180: {
            //     slidesPerView: 4,
            // },
            // 1340: {
            //     slidesPerView: 5,
            // },
        },
        navigation: {
            nextEl: ".promo-slider-wrap .promo__controls .slider-arrow.next",
            prevEl: ".promo-slider-wrap .promo__controls .slider-arrow.prev",
        },
    });

    const spaSwimmingPool = new Swiper(".js__pool-slider", {
        loop: true,
        speed: 800,
        spaceBetween: 15,
        slidesPerView: 1,
        breakpoints: {
            // 580: {
            //     slidesPerView: 1,
            // },
            // 768: {
            //     slidesPerView: 2,
            // },
            // 991: {
            //     slidesPerView: 3,
            // },
            // 1180: {
            //     slidesPerView: 4,
            // },
            // 1340: {
            //     slidesPerView: 5,
            // },
        },
        navigation: {
            nextEl: ".promo-slider-wrap .promo__controls .slider-arrow.next",
            prevEl: ".promo-slider-wrap .promo__controls .slider-arrow.prev",
        },
    });
});
