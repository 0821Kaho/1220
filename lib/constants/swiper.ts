export const SWIPER_CONFIG = {
  navigation: {
    enabled: true,
    hideOnClick: false,
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },
  pagination: {
    clickable: true,
    dynamicBullets: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  loop: true,
  speed: 800,
  watchSlidesProgress: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
} as const;