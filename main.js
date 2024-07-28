
const burgerButton = document.querySelector('.burger-button');
burgerButton.onclick = () => {
  if (burgerButton.classList.contains('active')) {
    burgerButton.classList.remove('active');
  }
  else {
    burgerButton.classList.add('active');
  }
}

setupSwiper('.offers-swiper');
setupSwiper('.products-swiper');
