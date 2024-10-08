document.addEventListener("DOMContentLoaded", function () {
    // Initialisation du Swiper pour le texte
    const swiperContent = new Swiper('.boxp.is-sp-content', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        effect: 'fade',
        pagination: {
            el: '.sp_slider-navigation',
            clickable: true,
        },
    });

    // Initialisation du Swiper pour les vidéos
    const swiperVideos = new Swiper('.swiper.is-character', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 1, // Affiche une vidéo à la fois
        spaceBetween: 10, // Espace entre les slides
    });
});
