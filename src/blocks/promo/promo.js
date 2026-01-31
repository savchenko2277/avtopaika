import swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';

(() => {

    const promoSwiper = new swiper('.promo__swiper', {
        modules: [Autoplay, EffectFade],
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

})();
