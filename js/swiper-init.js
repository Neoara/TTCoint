const swiperBenefits = new Swiper('.benefits-swiper', {
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 16,
  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 16,
      slidesPerGroup: 1,
    },
  },
});
const swiperPricing = new Swiper('.pricing-cards', {
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 16,
  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
  },
});
