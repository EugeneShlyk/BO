import { onShowNavigation } from "./navigation.js";

const navToggle = document.querySelector(".main-nav__toggle");

navToggle.addEventListener("click", onShowNavigation);

const sliderLine = document.querySelector('.slider-checkerboard__list'),
      sliderItems = sliderLine.querySelectorAll('.slider-checkerboard__item'),
      paginationItems = document.querySelectorAll('.slider-checkerboard__pagination-item-button'),
      sliderButtonPrev = document.querySelector('.slider-checkerboard-button-prev'),
      sliderButtonNext = document.querySelector('.slider-checkerboard-button-next');

let sliderCount = 0,
    sliderWidth;

// задает шаг перемещения слайдов
const rollSlider = () => {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Задаёт нужную ширину картинке и slideLine
const showSlide = () => {
  sliderWidth = document.querySelector('.slider-checkerboard__list').offsetWidth;
  sliderLine.style.width = sliderWidth * sliderItems.length + 'px';
  sliderItems.forEach(item =>
    item.style.width = sliderWidth + 'px'
  );
  rollSlider();
};

showSlide();

// адаптивность слайдера
window.addEventListener('resize', showSlide);

const thisSlide = (index) => {
  paginationItems.forEach(item => item.classList.remove('slider-checkerboard__pagination-item-button--current'));
  paginationItems[index].classList.add('slider-checkerboard__pagination-item-button--current');
}

// перелистывает слайд вперед
const nextSlide = () => {
  sliderCount++;
  if (sliderCount >= sliderItems.length) {
    sliderCount = 0;
  }

  rollSlider();
  thisSlide(sliderCount);
};

// перелистывает слайд назад
const prevSlide = () => {
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = sliderItems.length - 1;
  }

  rollSlider();
  thisSlide(sliderCount);
};

// кнопки перелистывания слайдов вперёд и назад
sliderButtonNext.addEventListener('click', nextSlide);
sliderButtonPrev.addEventListener('click', prevSlide);

paginationItems.forEach((item,index) => {
  item.addEventListener('click', () => {
    console.log('привет');
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  })
})

// // автоматическое перелистывание слайдов
// setInterval(() => {
//   nextSlide()
// }, 5000);




