const swiperConfig = {
  spaceBetween: 30,
  slidesPerView: 3,
  speed: 800,
  grabCursor: true,
  updateOnWindowResize: true,
  watchOverflow: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    hide: false,
    dragSize: 300,
    snapOnRelease: false
  },
  breakpoints: {
    0: {
      spaceBetween: 15,
      slidesPerView: 1.213,
      scrollbar: {
        dragSize: 137
      }
    },
    600: {
      spaceBetween: 15,
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 2.523,
      spaceBetween: 30,
      scrollbar: {
        dragSize: 300
      }
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
      scrollbar: {
        dragSize: 300
      }
    }
  }
}

const setupSwiper = (selector) => {

  const swiper = new Swiper(selector, swiperConfig);

}